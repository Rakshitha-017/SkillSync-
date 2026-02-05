@echo off
echo.
echo ===================================================
echo  🚀 HACKATHON MVP - SKILL ASSESSMENT PLATFORM
echo ===================================================
echo.
echo Starting your hackathon demo...
echo.
echo 📋 Demo Accounts Ready:
echo    Student:   student@demo.com / password123
echo    Recruiter: recruiter@demo.com / password123
echo.
echo 🌐 Opening browser in 3 seconds...
timeout /t 3 > nul

:: Start the browser
start http://localhost:3000

:: Start the server
echo 🚀 Starting server...
node api/server.js