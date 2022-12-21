// TODO: run 'npm init -y' and 'npm install inquirer@8.2.4' to get packages
// Done.
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Questions need work
const questions = [
    {
        type: 'input',
        message: "what would you like the title of this README file to be?",
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe the nature of this project.',
        name: 'description',
    },
    {   // question for technologies used
        type: 'input',
        message: 'What kinds of technologies were used in the creation of this ReadME Generator?',
        name: 'technology',
    },
    {
        type: 'input',
        message: 'What is the User Story for this assignment?',
        name: 'userStory',
    },
    {
        type: 'rawList', // not sure if this is the right syntax, want it to be user input but in list form
        message: 'What are the acceptance criteria for this assignment?',
        name: 'acceptanceCriteria',
    },
    {   // usage question
        type: 'input',
        message: 'How would you describe to the user the instructions for usage of this project?',
        name: 'usage',
    },
    {   // question for screenshot url
        type: 'input',
        message: 'What is the image location of your ReadME Generator screenshot?',
        name: 'screenShot',
    },
    {   // question for link to github repo
        type: 'input',
        message: 'What is the link to your GitHub Repository for this project?',
        name: 'gitHub',
    },
    // {   // is there a deployed application for this assignment?
    //     type: '',
    //     message: '',
    //     name: '',
    // },
];

// TODO: Create a function to write README file
// Needs work.
function writeToFile(answers) {
    return `# ${answers.title}

    ## Description
    
    ${answers.description}
    Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    
    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?

    ## Technology Used

    ${answers.technology}
    
    ## User Story

    ${answers.userStory}

    ## Acceptance Criteria

    ${answers.acceptanceCriteria}

    ## Installation
    
    {answers.installation}
    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    
    ## Usage
    
    ${answers.usage}

    Provide instructions and examples for use. Include screenshots as needed.
    
    To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
        md
        ![alt text](${answers.screenShot})
    
    ## Credits
    
    {answers.credits};

    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
    ## Links
    
    ${answers.gitHub}

    ## License
    
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
    ---
    
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    ## Features
    
    {answers.features}`
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