const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief summary about your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Explain how the user can install your project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how your project can be used.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can others contribute to your project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Explain how to run tests.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license.',
            choices: [],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Enter some intructions on how to contact you with questions.',
        },
    ])
};

//const questions = [];

const generateReadMe = ({title, description, installation, usage, contribution, tests, license, github, email, contact}) =>
`#${title}
\n##Description \n${description}
\n##Table of Contents
\n##Installation \n${installation}
\n##Usage \n${usage}
\n##Contribution Guidelines \n${contribution}
\n##Tests \n${tests}
\n##License \n${license}
\n##Questions \n${contact} \nGitHub: ${github} \nEmail: ${email}
`

// TODO: Create a function to write README file
// function writeToFileSync(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to README.md.'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
