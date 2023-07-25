const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
    {
        type: 'input',
        name: 'logoText',
        message: 'Please enter (up to) three characters for your logo.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Select the color of the text for your logo. (You can enter a color keyword or a hexadecimal number.)',
    },
    {
        type: 'list',
        message: 'We offer three shapes for the logo, which would you like?',
        name: 'selectedShape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your logo to be? (You can enter a color keyword or a hexadecimal number.)',
    }
    ])
    .then((response) => {   

        // I can likely use this switch case structure for the shape selector
    switch (response.license) {
        case 'Apache License 2.0':
            var chosenLicenseLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            projectLicense = 'Apache License 2.0';
            break;
        case 'MIT License':
            var chosenLicenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            projectLicense = 'MIT License';
            break;
        case 'Creative Commons Zero v1.0 Universal':
            var chosenLicenseLink = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
            projectLicense = 'Creative Commons Zero v1.0 Universal';
            break;
        case 'Mozilla Public License 2.0':
            var chosenLicenseLink = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            projectLicense = 'Mozilla Public License 2.0';
    }

    const filename = `${response.title.toLowerCase()}.md`;
    const projectTitle = response.title;
    const descrMotiv = response.descriptionMotivation;
    const descrSolvProb = response.descriptionSolvedProblem;
    const descrLearned = response.descriptionLearned;
    const projectInstallation = response.installation;
    const projectUsage = response.usage;
    const licenseBadge = chosenLicenseLink;
    const licenseChosen = projectLicense;
    const projectContributions = response.contributing;
    const projectTests= response.tests;
    const gitHubUser = response.githubUsername;
    const userEmail = response.email;

    convertToHTML(logotext)
    });

function convertToHTML(logotext) {
    var htmlVersion = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`;

    writeToReadMe (filename, markdownVersion);
};

function writeToReadMe (filename, markdownVersion) {
    fs.writeFile(filename, (markdownVersion), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();