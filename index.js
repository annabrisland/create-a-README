const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "Provide a table of contents.",
  "What are the installation instructions?",
  "What are the usage instructions?",
  "What is the license for this repo?",
  "Who are the contributors?",
  "What are the tests for this repo?",
  "What are the questions for this repo?",
];

const [
  title,
  contents,
  installation,
  usage,
  license,
  contributors,
  tests,
  repoQuestions,
] = questions;

// // function to write README file
// function writeToFile(fileName, data) {}

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
        name: "contents",
        message: contents
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
        type: "input",
        name: "license",
        message: license
    },
    {
        type: "input",
        name: "contributing",
        message: contributors
    },
    {
        type: "input",
        name: "tests",
        message: tests
    },
    {
        type: "input",
        name: "questions",
        message: repoQuestions
    },
]);

// function call to initialize program
init();
