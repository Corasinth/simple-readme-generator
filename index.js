// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [ 
    {
    type: "input",
    message: "Please enter your project title:",
    name: "title"
    },
    {
    type: "input",
    message: "Please enter your project's description:",
    name: "description"
    },
    {
    type: "input",
    message: "Please enter your project's installation instructions:",
    name: "installation"
    },
    {
    type: "input",
    message: "Please explain how to use your project:",
    name: "usage"
    },
    {
    type: "input",
    message: "PLease enter your project's contribution guidelines:",
    name: "contribution"
    }, 
    {
    type: "input",
    message: "PLease enter your project's tests:",
    name: "tests"
    },
    {
    type: "list",
    message: "PLease choose your project's license:",
    name: "license",
    choices: ["MIT License", "Apache 2.0 License", "Mozilla Public License 2.0", "GNU GPL v3", "Boost Software License 1.0", "The Hippocratic License 2.1", "The Unlicense"]
    },
    {
    type: "input",
    message: "PLease enter your GitHub username:",
    name: "github"
    },
    {
    type: "input",
    message: "Finall, pLease enter your email adress:",
    name: "email"
    },

];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('readme.md has been succesfully generated')
    })
};

// TODO: Create a function to initialize app
async function init() {
    let data = await inquirer.prompt(questions);
    console.log(data)
    let readmeString = generateMarkdown(data);
    writeToFile('samplereadme.md', readmeString)
};

// Function call to initialize app
init();
