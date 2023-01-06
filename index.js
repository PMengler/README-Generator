const inquirer = require('inquirer');
const fs = require('fs');

//  Questions for README
const questions = [
    {   // project title
        type: 'input',
        message: "what would you like the title of this README file to be?",
        name: 'title',
    },
    {   // description
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        name: 'description',
    },
    {   // installation
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {   // usage
        type: 'input',
        message: 'How would you describe to the user the instructions for usage of this project?',
        name: 'usage',
    },
    {   // deployment
        type: 'input',
        message: 'How is this project deployed?',
        name: 'deployment',
    },
    {   // question for screenshot url
        type: 'input',
        message: 'What is the image location of your ReadME Generator screenshot?',
        name: 'screenShot',
    },
    {   // contributing
        type: 'input',
        message: 'Who can contribute to this project? How do they go about doing so?',
        name: 'contributing',
    },
    {   // tests
        type: 'input',
        message: 'What kind of testing did you perform on this project?',
        name: 'testing',
    },
    {   // question for link to github repo
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
    {   // email address
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {   // license
        type: 'checkbox',
        message: 'What is the license of this project?',
        name: 'license',
        choices: ["MIT", "Apache", "BSD", "None"],
    },
];

//  README file content
function generateReadMe(answers) {
return `# ${answers.title}
${generateLicenseBadge(answers.license)}

## Description
    
${answers.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)

## Installation

In order to run the applicaton, run the following command in the integrated terminal:
    
    ${answers.installation}

## Usage

${answers.usage}

To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

md
![alt text](${answers.screenShot})

## Contributing

${answers.contributing}


## Testing

Testing is not applicable on this project. However, typically you would run the following command in the integrated terminal:

    ${answers.testing}

## Questions

GitHub Url: https://github.com/${answers.gitHub}

Please Contact me via email only.\n
Email Address: ${answers.email}

## License

NOTICE:
This project is covered under an ${answers.license} License. Please refer to license section to review permissions.
${generateLicenseLink(answers.license)}
`
};

//  Functions for License Badge and Link
function generateLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
};

function generateLicenseLink(license) {
    if (license!== 'None') {
        return `\n* [License](#license)\n`;
    };
    return '';
}

//  Function for running the prompts and creating the README file
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log('Creating your new README file...');
        fs.writeFile("README.md", generateReadMe(answers), (err) => {
            err ? console.log(err) : console.log('Done!');
        })
    });
};

//  Runs the backend application
init();