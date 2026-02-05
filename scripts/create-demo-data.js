const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs').promises;
const path = require('path');

// Database file path
const DB_FILE = path.join(__dirname, '../data/database.json');

async function createDemoData() {
    try {
        // Ensure data directory exists
        await fs.mkdir(path.dirname(DB_FILE), { recursive: true });

        // Create demo data
        const demoData = {
            users: [
                // Demo Student
                {
                    id: uuidv4(),
                    name: "Alex Johnson",
                    email: "student@demo.com",
                    password: await bcrypt.hash("password123", 10),
                    role: "student",
                    scores: { aptitude: 85, technical: 78, communication: 92 },
                    feedback: "Excellent communication skills! Consider strengthening your technical knowledge with some advanced programming courses. Your logical reasoning is very strong - keep building on that foundation.",
                    createdAt: new Date().toISOString()
                },
                // Demo Recruiter
                {
                    id: uuidv4(),
                    name: "Sarah Wilson",
                    email: "recruiter@demo.com",
                    password: await bcrypt.hash("password123", 10),
                    role: "recruiter",
                    scores: { aptitude: 0, technical: 0, communication: 0 },
                    feedback: "",
                    createdAt: new Date().toISOString()
                },
                // Additional students for better demo
                {
                    id: uuidv4(),
                    name: "Mike Chen",
                    email: "mike@example.com",
                    password: await bcrypt.hash("password123", 10),
                    role: "student",
                    scores: { aptitude: 72, technical: 95, communication: 68 },
                    feedback: "Outstanding technical skills! Focus on improving communication abilities for better team collaboration.",
                    createdAt: new Date().toISOString()
                },
                {
                    id: uuidv4(),
                    name: "Emma Davis",
                    email: "emma@example.com",
                    password: await bcrypt.hash("password123", 10),
                    role: "student",
                    scores: { aptitude: 88, technical: 82, communication: 90 },
                    feedback: "Well-rounded skillset with strong performance across all areas. You're ready for leadership roles!",
                    createdAt: new Date().toISOString()
                }
            ],
            jobs: [
                // Sample job postings
                {
                    id: uuidv4(),
                    title: "Software Developer",
                    company: "TechStart Inc.",
                    description: "Join our dynamic team building cutting-edge web applications. We're looking for passionate developers who love clean code and innovative solutions.",
                    requirements: { aptitude: 70, technical: 80, communication: 60 },
                    recruiterId: "demo-recruiter-id", // Will be updated after creation
                    postedDate: new Date().toISOString(),
                    status: "active"
                },
                {
                    id: uuidv4(),
                    title: "Junior Data Analyst",
                    company: "DataViz Corp",
                    description: "Perfect entry-level position for recent graduates. Help us analyze data trends and create meaningful insights for our clients.",
                    requirements: { aptitude: 75, technical: 65, communication: 70 },
                    recruiterId: "demo-recruiter-id",
                    postedDate: new Date().toISOString(),
                    status: "active"
                },
                {
                    id: uuidv4(),
                    title: "Marketing Coordinator",
                    company: "Creative Solutions",
                    description: "Join our marketing team! We need someone with great communication skills and creative thinking to help grow our brand.",
                    requirements: { aptitude: 65, technical: 40, communication: 85 },
                    recruiterId: "demo-recruiter-id",
                    postedDate: new Date().toISOString(),
                    status: "active"
                }
            ],
            tests: []
        };

        // Update job recruiter IDs to match actual recruiter
        const recruiter = demoData.users.find(u => u.email === "recruiter@demo.com");
        if (recruiter) {
            demoData.jobs.forEach(job => {
                job.recruiterId = recruiter.id;
            });
        }

        // Write to database file
        await fs.writeFile(DB_FILE, JSON.stringify(demoData, null, 2));
        
        console.log('✅ Demo data created successfully!');
        console.log('\n🎯 Demo Accounts:');
        console.log('Student: student@demo.com / password123');
        console.log('Recruiter: recruiter@demo.com / password123');
        console.log('\n📊 Sample Data:');
        console.log(`- ${demoData.users.length} users created`);
        console.log(`- ${demoData.jobs.length} job postings created`);
        console.log(`- Database saved to: ${DB_FILE}`);
        
    } catch (error) {
        console.error('❌ Error creating demo data:', error);
    }
}

// Run if called directly
if (require.main === module) {
    createDemoData();
}

module.exports = { createDemoData };