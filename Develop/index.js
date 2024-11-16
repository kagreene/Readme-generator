//Need to finish: table of contents, write function to write file, and create initialization function. 
//NEED TO COMPLETE README
//FIX LINKS IN TOC AND LICENSE SECTION!!!!!


// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';


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
    choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0']
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





//In the then section, call the generate markdown function and the write to file function. 
    // TODO: Create a function to write README file
//what to do about fileName? Need to define a new file name based on the project? Or shouldn't it always be read me?           
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Read me created!');
    });
};



// TODO: Create a function to initialize app

//Structure like bonus.js from week 7 mini project? 
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
 }

// Function call to initialize app
init();


