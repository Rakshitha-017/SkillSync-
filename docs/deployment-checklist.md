# 🚀 Hackathon Deployment Checklist

## 📋 Pre-Setup (Do This First!)

### Account Creation
- [ ] **Bubble.io**: Sign up for free account
- [ ] **Airtable**: Create workspace and base  
- [ ] **Typeform**: Get free account
- [ ] **OpenAI**: Create API account (optional)
- [ ] **Zapier**: Sign up for free tier

### API Keys & URLs Collection
- [ ] Airtable API key: `https://airtable.com/create/tokens`
- [ ] Airtable Base ID: Found in your base URL
- [ ] OpenAI API key: `https://platform.openai.com/api-keys`
- [ ] Typeform API token: `https://admin.typeform.com/account#/section/tokens`

## 🗄️ Airtable Database Setup

### 1. Create Base
- [ ] New base called "Hackathon MVP"
- [ ] Import/create tables as specified below

### 2. Users Table
Create columns:
- [ ] **Name** (Single line text)
- [ ] **Email** (Email)
- [ ] **Password** (Single line text) *Note: Use Bubble's auth instead*
- [ ] **Role** (Single select: Student, Recruiter)
- [ ] **Aptitude Score** (Number, 0-100)
- [ ] **Technical Score** (Number, 0-100)  
- [ ] **Communication Score** (Number, 0-100)
- [ ] **Created At** (Date with time)
- [ ] **Last Test Date** (Date with time)

### 3. Jobs Table
Create columns:
- [ ] **Title** (Single line text)
- [ ] **Company** (Single line text)
- [ ] **Description** (Long text)
- [ ] **Recruiter ID** (Link to Users table)
- [ ] **Min Aptitude Score** (Number, 0-100)
- [ ] **Min Technical Score** (Number, 0-100)
- [ ] **Min Communication Score** (Number, 0-100)
- [ ] **Posted Date** (Date with time)
- [ ] **Status** (Single select: Active, Closed)

### 4. Test Data (Optional)
- [ ] Add 3-5 dummy student records with scores
- [ ] Add 2-3 dummy job postings

## 📋 Typeform Test Setup

### 1. Create Form
- [ ] New form: "Skill Assessment Test"
- [ ] Enable scoring/calculation features

### 2. Question Structure

**Aptitude Section (5 questions):**
- [ ] Logic puzzle question
- [ ] Number sequence question  
- [ ] Pattern recognition
- [ ] Basic math problem
- [ ] Reasoning scenario

**Technical Section (5-10 questions):**
- [ ] Programming concept questions
- [ ] Problem-solving scenarios
- [ ] Technology knowledge
- [ ] Code debugging questions
- [ ] System design basics

**Communication Section (5 questions):**
- [ ] Grammar correction
- [ ] Email writing scenario
- [ ] Presentation choice
- [ ] Conflict resolution
- [ ] Team collaboration

### 3. Scoring Setup
- [ ] Assign points to each correct answer
- [ ] Create three score variables: aptitude_score, technical_score, communication_score
- [ ] Set up score calculation logic

### 4. Thank You Page
- [ ] Custom message with score breakdown
- [ ] Clear next steps for students

## 🔗 Zapier Automation

### 1. Create Zap
- [ ] Trigger: Typeform "New Response"
- [ ] Action: Airtable "Update Record"

### 2. Field Mapping
Map Typeform responses to Airtable:
- [ ] Find user by email in Users table
- [ ] Update Aptitude Score field
- [ ] Update Technical Score field  
- [ ] Update Communication Score field
- [ ] Update Last Test Date

### 3. Test Integration
- [ ] Submit test form response
- [ ] Verify scores update in Airtable
- [ ] Check webhook logs for errors

## 💻 Bubble App Development

### 1. App Structure
Create pages:
- [ ] **Index** (Landing/Login)
- [ ] **Signup** 
- [ ] **Student Dashboard**
- [ ] **Recruiter Dashboard**
- [ ] **Test Page** (redirects to Typeform)

### 2. Database Connection
- [ ] Install Airtable plugin OR use API Connector
- [ ] Set up API calls to Airtable
- [ ] Configure authentication

### 3. Student Dashboard
Elements to add:
- [ ] Welcome message with user name
- [ ] Three score cards (Aptitude, Technical, Communication)
- [ ] "Take Test" button → link to Typeform
- [ ] AI Feedback section (text display)
- [ ] Available jobs list

### 4. Recruiter Dashboard  
Elements to add:
- [ ] Job posting form
- [ ] Student filtering controls
- [ ] Matching students list
- [ ] Contact/messaging features

### 5. Authentication
- [ ] User signup with role selection
- [ ] Login/logout functionality
- [ ] Session management
- [ ] Role-based page access

## 🤖 AI Feedback Integration

### 1. OpenAI API Setup
- [ ] Test API key with simple request
- [ ] Create feedback generation function
- [ ] Handle API rate limits and errors

### 2. Integration Options

**Option A: Bubble Plugin**
- [ ] Install OpenAI plugin for Bubble
- [ ] Configure API workflow
- [ ] Test feedback generation

**Option B: Custom API**  
- [ ] Use provided Node.js template
- [ ] Deploy to free hosting (Vercel/Netlify)
- [ ] Connect via Bubble API Connector

### 3. Feedback Triggers
- [ ] Generate feedback after test completion
- [ ] Update user record with feedback text
- [ ] Display on student dashboard

## 🎨 UI Polish

### 1. Design Consistency
- [ ] Choose color scheme (2-3 colors max)
- [ ] Set consistent fonts and spacing
- [ ] Add simple icons for clarity

### 2. Mobile Responsive
- [ ] Test pages on mobile preview
- [ ] Adjust layouts for mobile screens
- [ ] Ensure buttons are clickable

### 3. User Experience
- [ ] Add loading states
- [ ] Success/error messages
- [ ] Clear navigation
- [ ] Help text where needed

## 🧪 Testing & Demo Prep

### 1. End-to-End Testing
- [ ] Student signup → test taking → score update
- [ ] Recruiter signup → job posting → student filtering
- [ ] AI feedback generation and display

### 2. Demo Data
- [ ] Create demo accounts (student & recruiter)
- [ ] Add sample test scores
- [ ] Create compelling job postings

### 3. Demo Script
- [ ] 2-minute user flow walkthrough
- [ ] Key features highlight
- [ ] Technical architecture overview

## 🚨 Backup Plans

### If Typeform integration fails:
- [ ] Use Bubble's built-in form with manual scoring
- [ ] Create simple MCQ interface in Bubble

### If AI integration fails:  
- [ ] Use pre-written feedback templates
- [ ] Show static improvement tips

### If Airtable is slow:
- [ ] Use Bubble's internal database
- [ ] Simplify data structure

## ⏰ Time Management

**Hour 1**: Accounts + Airtable setup  
**Hour 2**: Typeform creation + basic Bubble pages  
**Hour 3**: Core Bubble functionality  
**Hour 4**: Zapier integration + testing  
**Hour 5**: Polish + AI feedback  
**Hour 6**: Testing + demo prep  

---

**Pro Tip**: Start with the most critical features first. A working login → test → score update flow is better than a beautiful UI with broken functionality! 🎯