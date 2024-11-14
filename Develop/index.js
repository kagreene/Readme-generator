// TODO: Include packages needed for this application
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
//include type, name, message info in this array

const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
    //need validations/trimming? 
},
{
    type: 'input',
    name: 'description',
    message: 'Please add a description of your project',
},
{
    type: 'input',
    name: 'installlation',
    message: 'Please add some installation instructions',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please add any important usage information',
},
{
    type: 'input',
    name: 'contributing',
    message: 'Please add guidelines for contributing to your project',
},
{
    type: 'input',
    name: 'tests',
    message: 'Please add test instructions for your project',
},
{
    type: 'list',
    name: 'license',
    message: 'Select a license for your application',
    choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'Mozilla Public License 2.0', 'Eclipse Public License 2.0' ]
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

];

//look at editor example in the inquirer examples github. https://github.com/SBoudrias/Inquirer.js/blob/main/packages/inquirer/examples/editor.mjs 
//Above example also uses an array to store questions 

//license should use a list prompt 




inquirer
    .prompt(questions)
    .then()
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

//how to add the license badge? Where do we get those badges from? 

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
