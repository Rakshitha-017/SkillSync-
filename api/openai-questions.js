require('dotenv').config({ path: '../config/.env' });
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Generate a list of multiple-choice questions using OpenAI
 * @param {string} type - one of 'aptitude'|'technical'|'communication'|'all'
 * @param {number} count - number of questions to generate
 * @returns {Promise<Array>} questions - [{ section, question, options:[], correct: index }]
 */
async function generateQuestions(type = 'all', count = 10) {
  // Normalize
  const section = ['aptitude', 'technical', 'communication'].includes(type) ? type : 'all';
  const desired = Number(count) || (section === 'all' ? 15 : 10);

  const system = `You are a helpful exam-question generator. Produce exactly ${desired} multiple-choice questions` +
    ` in JSON format. Each question object must include these keys:\n- section: one of 'aptitude','technical','communication'\n- question: the question text string\n- options: an array of 4 option strings\n- correct: the zero-based index (0..3) of the correct option\nReturn ONLY valid JSON (an array). Do not include any explanations or extra text.`;

  const user = `Generate ${desired} ${section === 'all' ? 'mixed (aptitude, technical, communication)' : section} questions suitable for an online assessment. Keep questions clear and concise. Ensure exactly 4 options per question and one correct answer.`;

  try {
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user }
      ],
      temperature: 0.7,
      max_tokens: 1500
    });

    let text = completion.choices?.[0]?.message?.content || '';
    // Try to extract JSON from the response
    const firstBrace = text.indexOf('[');
    if (firstBrace > -1) text = text.slice(firstBrace);
    const parsed = JSON.parse(text);

    // Basic validation and normalization
    const out = parsed.slice(0, desired).map((item, idx) => {
      const q = {
        section: item.section || (section === 'all' ? (['aptitude','technical','communication'][idx % 3]) : section),
        question: String(item.question || '').trim(),
        options: Array.isArray(item.options) ? item.options.slice(0,4).map(String) : [],
        correct: typeof item.correct === 'number' ? item.correct : 0
      };
      // Ensure 4 options
      while (q.options.length < 4) q.options.push('Option');
      q.correct = Math.max(0, Math.min(3, Number(q.correct) || 0));
      return q;
    });

    return out;
  } catch (err) {
    console.error('generateQuestions error:', err);
    throw err;
  }
}

module.exports = { generateQuestions };
