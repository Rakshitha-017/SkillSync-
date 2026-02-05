// OpenAI API Integration for AI Feedback
// This can be used as a backup if you want to implement custom AI feedback

require('dotenv').config({ path: '../config/.env' });

const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generate AI feedback based on student test scores
 * @param {Object} scores - Student's scores object
 * @param {number} scores.aptitude - Aptitude score (0-100)
 * @param {number} scores.technical - Technical score (0-100)
 * @param {number} scores.communication - Communication score (0-100)
 * @returns {Promise<string>} AI-generated feedback
 */
async function generateFeedback(scores) {
  try {
    const prompt = `
Student Assessment Results:
- Aptitude Score: ${scores.aptitude}/100
- Technical Score: ${scores.technical}/100
- Communication Score: ${scores.communication}/100

Please provide brief, actionable feedback for this student to improve their skills. 
Keep it encouraging and practical. Limit to 3-4 sentences.
    `.trim();

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a career counselor providing constructive feedback to students based on their skill assessment scores."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: process.env.OPENAI_MODEL || "gpt-3.5-turbo",
      max_tokens: 150,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI feedback:', error);
    return 'Unable to generate feedback at this time. Please try again later.';
  }
}

/**
 * Generate skill-specific tips
 * @param {string} skill - Skill name (aptitude, technical, communication)
 * @param {number} score - Score for the skill (0-100)
 * @returns {Promise<string>} Skill-specific improvement tips
 */
async function generateSkillTips(skill, score) {
  try {
    const prompt = `
A student scored ${score}/100 in ${skill}. 
Provide 2-3 specific, actionable tips to improve this skill.
Be concise and practical.
    `.trim();

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are an expert career coach providing specific improvement strategies."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: process.env.OPENAI_MODEL || "gpt-3.5-turbo",
      max_tokens: 100,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating skill tips:', error);
    return 'Practice regularly and seek feedback from mentors.';
  }
}

// Export functions for use in other modules
module.exports = {
  generateFeedback,
  generateSkillTips
};

// Example usage (uncomment to test)
/*
(async () => {
  const testScores = {
    aptitude: 75,
    technical: 65,
    communication: 80
  };
  
  const feedback = await generateFeedback(testScores);
  console.log('AI Feedback:', feedback);
  
  const tips = await generateSkillTips('technical', 65);
  console.log('Technical Tips:', tips);
})();
*/