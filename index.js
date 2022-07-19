// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [ 
    {
    type: "input",
    message: "What's your name?",
    name: "name"
    },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    fs.writeFile('readme.md', data, (err) => {
        err ? console.error(err) : console.log('readme.md has been succesfully generated')
    })
};

// TODO: Create a function to initialize app
async function init() {
    let response = await inquirer.prompt(questions);
    writeToFile(TBD, TBD)
};

// Function call to initialize app
init();
