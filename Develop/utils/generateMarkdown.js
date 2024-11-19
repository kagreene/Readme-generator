// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
  if (license === null ){
    return badge
  }
  else if (license === 'MIT License'){
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    return badge
  }
  else if (license === 'Apache License 2.0'){
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
    return badge
  }
  else if (license === 'GNU General Public License v3.0'){
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
    return badge
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

//Fix links and badges for licenses 
function renderLicenseLink(license) {
  let licenseLink = ''
  if (license === null) {
    return licenseLink
  }
  else if (license === 'MIT License') {
    licenseLink ='(https://opensource.org/licenses/MIT)'
    return licenseLink
  }
  else if (license === 'Apache License 2.0'){
    licenseLink = '(https://opensource.org/licenses/Apache-2.0)'
    return licenseLink
  }
  else if (license === 'GNU General Public License v3.0'){
    licenseLink = '(https://www.gnu.org/licenses/gpl-3.0)'
    return licenseLink
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === null) {
    return licenseSection
  }
  else{
    licenseSection = (renderLicenseBadge(license))+renderLicenseLink(license)
    return licenseSection
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
// call renderLicenseSection function here or in the other file? 
  const licenseSection = renderLicenseSection(data.license)
  
  return `# ${data.title}
  ${licenseSection}
  ## Description
  * ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  * ${data.installation}
  ## Usage
  * ${data.usage}
  ## License
  ${licenseSection}
  * This application is covered under ${data.license}
  ## Contributing
  * ${data.contributing}
  ## Tests
  * ${data.tests}
  ## Questions 
  Questions? Reach out through GitHub or Email! 
  * [GitHub](https://github.com/${data.github})
  * [Email](${data.email})
`;
}
//Add instructions on how to reach with additional questions
export default generateMarkdown;
