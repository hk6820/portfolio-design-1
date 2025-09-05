#!/usr/bin/env node

/**
 * Portfolio Setup Script
 * This script helps users quickly set up their portfolio with their information
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const configPath = path.join(__dirname, 'src', 'config.js');

console.log('🚀 Welcome to Portfolio Setup!');
console.log('This script will help you customize your portfolio with your information.\n');

// Read current config
let configContent = fs.readFileSync(configPath, 'utf8');

// Questions for user
const questions = [
  {
    key: 'name',
    question: 'What is your full name?',
    default: 'John Doe'
  },
  {
    key: 'subtitle',
    question: 'What is your job title/profession?',
    default: 'Frontend Developer'
  },
  {
    key: 'email',
    question: 'What is your email address?',
    default: 'your.email@example.com'
  },
  {
    key: 'linkedin',
    question: 'What is your LinkedIn profile URL?',
    default: 'https://www.linkedin.com/in/yourprofile'
  },
  {
    key: 'github',
    question: 'What is your GitHub profile URL?',
    default: 'https://github.com/yourusername'
  },
  {
    key: 'portfolioTitle',
    question: 'What should be your portfolio title?',
    default: 'Your Portfolio'
  }
];

let answers = {};

function askQuestion(index) {
  if (index >= questions.length) {
    updateConfig();
    return;
  }

  const q = questions[index];
  rl.question(`${q.question} (${q.default}): `, (answer) => {
    answers[q.key] = answer.trim() || q.default;
    askQuestion(index + 1);
  });
}

function updateConfig() {
  console.log('\n📝 Updating your portfolio configuration...\n');

  // Update personal info
  configContent = configContent.replace(
    /name: ".*?"/g,
    `name: "${answers.name}"`
  );
  
  configContent = configContent.replace(
    /subtitle: ".*?"/g,
    `subtitle: "${answers.subtitle}"`
  );
  
  configContent = configContent.replace(
    /email: ".*?"/g,
    `email: "${answers.email}"`
  );
  
  configContent = configContent.replace(
    /linkedIn: ".*?"/g,
    `linkedIn: "${answers.linkedin}"`
  );
  
  configContent = configContent.replace(
    /github: ".*?"/g,
    `github: "${answers.github}"`
  );

  // Update navigation title
  configContent = configContent.replace(
    /title: ".*?"/g,
    `title: "${answers.portfolioTitle}"`
  );

  // Write updated config
  fs.writeFileSync(configPath, configContent);

  console.log('✅ Configuration updated successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Edit src/config.js to add your projects, experience, and skills');
  console.log('2. Add your profile photo to public/assets/icons/');
  console.log('3. Add your resume to public/files/');
  console.log('4. Run "npm start" to see your portfolio');
  console.log('5. Run "npm run build" when ready to deploy');
  console.log('\n📖 For detailed instructions, see USER_GUIDE.md');
  console.log('🚀 For deployment help, see DEPLOYMENT_GUIDE.md\n');

  rl.close();
}

// Start the setup process
askQuestion(0);
