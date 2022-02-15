const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions/prompts for user to answer
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
            message: 'Describe how your your project can be used.',
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
            choices: ["Apache_2.0", "MIT", "EPL_1.0", "Unlicense"],
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
            message: 'Enter some intructions on how to contact you with questions. (Your GitHub and email address will be displayed belowed these instructions.)',
        },
        {
            type: 'input',
            name: 'acknowledgements',
            message: 'Enter information regarding resources used and/or acknowledgements.'
        }
    ])
};

// All the text to be written to READme file, with user inputs added
const generateReadMe = ({title, description, installation, usage, contribution, tests, license, github, email, contact, acknowledgements}) =>
`![License](https://img.shields.io/badge/License-${license}-blue.svg)
\n# ${title}
\n## Description \n${description}
\n## Table of Contents
\n -[Installation](#installation)
\n -[Usage](#usage)
\n -[Contribution Guidelines](#contribution-guidelines)
\n -[Tests](#tests)
\n -[License](#license)
\n -[Questions](#questions)
\n -[Acknowledgements](#acknowledgements)
\n## Installation \n${installation}
\n## Usage \n${usage}
\n## Contribution Guidelines \n${contribution}
\n## Tests \n${tests}
\n## License \n This application is covered under the ${license} license.
\n## Questions \n${contact} 
\nGitHub: https://github.com/${github} 
\nEmail: ${email}
\n## Acknowledgements \n${acknowledgements}
`



// Runs app: user answers prompts, and their answers are written to a README file
const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('./other/README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to README.md.'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
