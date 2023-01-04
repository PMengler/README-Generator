// TODO: run 'npm init -y' and 'npm install inquirer@8.2.4' to get packages
// Done.
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Questions need work
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
    {   // link to walkthrough video
        type: 'input',
        message: 'Please provide the link to your walkthrough video.',
        name: 'video',
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
        choices: ["MIT", "Apache-2.0", "BSD-3-Clause"],
    },
];

// TODO: Create a function to write README file
// Needs work.
function writeToFile(answers) {
    return `# ${answers.title}

    ## Description
    
    ${answers.description}

    ## Table of Contents

    - Installation
    - Usage
    - Contributing
    - Tests
    - Questions
    - License

    ## Installation
    
    ${answers.installation}
    
    ## Usage
    
    ${answers.usage}

    Provide instructions and examples for use. Include screenshots as needed.
    
    To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
        md
        ![alt text](${answers.screenShot})

        ${answers.video}

    ## Contributing

    ${answers.contributing}


    ## Testing

    ${answers.testing}

    ## Questions

    GitHub Url: https://github.com/${answers.gitHub}
    
    Please Contact me via email only.
    Email Address: ${answers.email}

    ## License
    
    NOTICE:
    This project is covered under an ${answers.license} License. Please refer to license section to review permissions.
    
    ## Badges
    
    ![README-Generator](https://img.shields.io/github/license/PMengler/README-Generator)
    
    Check out the badges hosted by [shields.io](https://shields.io/).
   `
};

// TODO: Create a function to initialize app
// Done.
function init() {
    inquirer.prompt(questions).then(answers => {
        fs.writeFile("README.md", writeToFile(answers), (err) => {
            err ? console.log(err) : console.log('Done!');
        })
    });
};

// Function call to initialize app
init();