const fs = require("fs");
const util = require('util');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "Provide a brief description of your project.",
  "What are the installation instructions?",
  "What are the usage instructions?",
  "What is the license for this repo?",
  "What are the contribution guidelines?",
  "What are the tests for this repo?",
  "What is your GitHub username?",
  "What is your email?"
];

const [
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  username,
  email
] = questions;

// function to write README file
const writeToFile = util.promisify(fs.writeFile);

// function to initialize program
const init = () => 
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: title
    },
    {
        type: "input",
        name: "description",
        message: description
    },
    {
        type: "input",
        name: "installation",
        message: installation
    },
    {
        type: "input",
        name: "usage",
        message: usage
    },
    {
        type: "list",
        name: "license",
        message: license,
        choices: ["None", "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"]
    },
    {
        type: "input",
        name: "contributing",
        message: contributing
    },
    {
        type: "input",
        name: "tests",
        message: tests
    },
    {
        type: "input",
        name: "username",
        message: username
    },
    {
        type: "input",
        name: "email",
        message: email
    },
]);

// function call to initialize program
init()
.then((data) => writeToFile("README.md", generateMarkdown(data)))
.catch((err) => console.error(err));