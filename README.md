SkillSync
AI-Powered Career Readiness Assistant for Students

SkillSync is a web-based career readiness platform designed to help students evaluate and improve their technical, communication, and career skills. The system provides structured assessments, role-based dashboards, and AI-assisted guidance to support placement preparation and candidate screening.

Overview

Many students lack a clear understanding of their career readiness, while recruiters face challenges in effectively evaluating candidates. SkillSync bridges this gap by offering a centralized platform for assessments, communication testing, and performance analysis.

Features
Student Module

User authentication

Technical skill assessment tests

Speech and communication test

Career guidance through a help module

Performance evaluation

Recruiter Module

Recruiter login and dashboard

View and evaluate student test results

Assist in preliminary candidate screening

AI Assistance

Python-based help bot

Guidance for tests and career-related queries

Project Structure
SkillSync/
│
├── public/
│   ├── login.html
│   ├── student.html
│   ├── recruiter.html
│   ├── test.html
│   ├── choose-test.html
│   ├── speech-test.html
│   └── help.html
│
├── data/                  # Demo and test data
├── scripts/
│   └── create-demo-data.js
│
├── python-help-bot/       # AI help bot module
├── uploads/               # User uploaded files
│
├── package.json
├── package-lock.json
├── start-demo.bat
└── README.md
Technology Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js

AI Module: Python

Data Storage: JSON (demo data)

Tools: Git, GitHub, npm

Installation and Setup
Step 1: Clone the repository
git clone https://github.com/your-username/SkillSync.git
cd SkillSync
Step 2: Install dependencies
npm install
Step 3: Run the demo application
start-demo.bat

or

node scripts/create-demo-data.js
Step 4: Access the application

Open the following URL in a web browser:

http://localhost:3000/login.html
Application Workflow

User accesses the login page

User selects role (Student or Recruiter)

Students complete skill and speech assessments

Recruiters review performance data

Help bot provides guidance and assistance

Future Enhancements

Resume analysis using AI

Mock interview modules

Company-specific assessment tracks

Database integration (MySQL or MongoDB)

Deployment to cloud platforms

Project Status

Completed – Final Product

Contributors

Developed by a team of undergraduate students as part of an academic and placement-oriented project.
