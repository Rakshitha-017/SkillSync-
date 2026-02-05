import os
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import openai

OPENAI_KEY = os.environ.get('OPENAI_API_KEY')
if OPENAI_KEY:
    openai.api_key = OPENAI_KEY

app = FastAPI(title="SkillSync Help Bot")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Query(BaseModel):
    question: str


# Predefined Q&A (fallback)
PRESET_QA = {
    "how do i take a test": "Go to 'Take Skill Test' on your dashboard, choose a test type and follow the on-screen instructions.",
    "how do i view my results": "After finishing a test you'll see your scores and AI feedback. You can also view historical scores on the Student Dashboard.",
    "what is this platform": "SkillSync helps students practice and showcase skills through short skill assessments and AI-powered feedback.",
    "how to improve technical skills": "Practice coding problems daily, build small projects, read documentation, and review system design basics.",
    "how do i contact support": "Email support@skillsync.local or use the in-app contact form (coming soon)."
}


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/query")
def query_bot(q: Query):
    user_q = q.question.strip()
    key = user_q.lower()

    # If OpenAI key is configured, use it to generate a helpful answer.
    if OPENAI_KEY:
        try:
            system = "You are a friendly help assistant for the SkillSync web app. Answer succinctly and include actionable steps when appropriate."
            resp = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role":"system","content":system},
                    {"role":"user","content":user_q}
                ],
                max_tokens=300,
                temperature=0.2
            )
            text = resp.choices[0].message.content.strip()
            return {"answer": text, "source": "openai"}
        except Exception as e:
            # fall back to preset if OpenAI fails
            print('OpenAI error:', e)

    # Exact-match fallback
    if key in PRESET_QA:
        return {"answer": PRESET_QA[key], "source": "preset"}

    # simple fuzzy search by keywords
    for k, v in PRESET_QA.items():
        if any(word in key for word in k.split()):
            return {"answer": v, "source": "fuzzy"}

    return {"answer": "Sorry, I don't know that yet. Try asking about taking tests, viewing results, or how the platform works.", "source": "none"}
