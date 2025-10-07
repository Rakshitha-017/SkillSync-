# 🏆 Hackathon MVP: Student-Recruiter Skill Assessment Platform

**One-Day Build** | **No-Code Focus** | **AI-Powered Feedback**

## 📋 Project Overview

A rapid-prototype skill assessment platform connecting students and recruiters through standardized testing and AI-powered feedback.

### 🎯 MVP Features (Today Only!)

✅ **Login/Signup** → Students & Recruiters  
✅ **Student Dashboard** → 3 skill categories with scores  
✅ **MCQ Test** → 10-15 questions, auto-scoring  
✅ **Recruiter Dashboard** → Job posting & student filtering  
⚡ **AI Feedback** → Text-based improvement suggestions  

## 🛠️ Tech Stack (No-Code First)

| Feature | Tool | Why |
|---------|------|-----|
| **Frontend** | Bubble | Drag & drop, fast prototyping |
| **Database** | Airtable | Easy setup, great API |
| **MCQ Test** | Typeform | Built-in scoring, professional UI |
| **AI Feedback** | OpenAI API | Quick integration, good results |
| **Automation** | Zapier | Connect services without coding |

## 🚀 Quick Start

### 1. Set Up Your Services

1. **Bubble App**: Create at [bubble.io](https://bubble.io)
2. **Airtable Base**: Create tables for Users, Jobs, Scores
3. **Typeform**: Build your MCQ test with scoring
4. **OpenAI API**: Get API key for feedback feature
5. **Zapier**: Set up webhook to sync Typeform → Airtable

### 2. Configure Environment (Optional)

If you want to use the API templates:

```bash
# Copy environment template
cp config/.env.template config/.env

# Install dependencies (if using Node.js APIs)
npm init -y
npm install openai airtable dotenv
```

### 3. Airtable Schema

Create these tables in your Airtable base:

**Users Table:**
- Name (Text)
- Email (Text)
- Role (Single Select: Student/Recruiter)
- Aptitude Score (Number)
- Technical Score (Number)
- Communication Score (Number)
- Created At (Date)
- Last Test Date (Date)

**Jobs Table:**
- Title (Text)
- Company (Text)
- Description (Long Text)
- Recruiter ID (Link to Users)
- Min Aptitude Score (Number)
- Min Technical Score (Number)
- Min Communication Score (Number)
- Posted Date (Date)
- Status (Single Select: Active/Closed)

## 📱 User Flows

### Student Journey
1. **Signup/Login** → Create account or sign in
2. **Dashboard** → View current scores (initially dummy data)
3. **Take Test** → Complete 10-15 MCQs via Typeform
4. **Get Results** → Updated scores + AI feedback
5. **View Jobs** → Browse opportunities matching their skills

### Recruiter Journey
1. **Signup/Login** → Create recruiter account
2. **Post Job** → Add job requirements and skill thresholds
3. **Filter Students** → View candidates meeting criteria
4. **Contact Students** → Direct outreach to top matches

## 🎯 MCQ Test Categories

### Aptitude (5 questions)
- Logical reasoning
- Pattern recognition
- Basic math

### Technical (5-10 questions)
- Programming concepts
- Problem-solving
- Technology knowledge

### Communication (5 questions)
- Grammar and writing
- Presentation scenarios
- Team collaboration

## 🤖 AI Feedback Examples

**Input:** Student scored 65 in Technical  
**Output:** "Focus on strengthening your programming fundamentals. Practice coding challenges daily and consider online courses in data structures. Join developer communities for peer learning."

## 📊 Success Metrics (Hackathon)

- ✅ Working login/signup flow
- ✅ Test scores updating in real-time
- ✅ Recruiter can filter students effectively
- ✅ AI feedback generates relevant suggestions
- ✅ End-to-end user journey complete

## 🚨 Hackathon Day Priorities

### Hour 1-2: Setup
- Create all service accounts
- Set up Airtable schema
- Configure Bubble app structure

### Hour 3-4: Core Features  
- Build login/signup pages in Bubble
- Create student & recruiter dashboards
- Connect Airtable API

### Hour 5-6: Testing System
- Design MCQ test in Typeform
- Set up Zapier automation
- Test score syncing

### Hour 7-8: Polish
- Add AI feedback integration
- Style the UI for demo
- Test full user journeys

## 🔧 Troubleshooting

**Typeform scores not syncing?**
- Check Zapier webhook URL
- Verify Airtable API permissions

**AI feedback not working?**
- Confirm OpenAI API key is valid
- Check rate limits on free tier

**Bubble app slow?**
- Optimize database queries
- Use Airtable's built-in caching

## 📈 Post-Hackathon Roadmap

- [ ] Mobile-responsive design
- [ ] Advanced skill categories
- [ ] Video interview scheduling
- [ ] Detailed analytics dashboard
- [ ] Real-time notifications

## 🤝 Team & Roles

- **Frontend**: Bubble development
- **Backend**: Airtable schema & API integration  
- **Testing**: Typeform design & Zapier automation
- **AI**: OpenAI integration & prompt engineering

---

**Built in a day, designed to scale!** 🚀