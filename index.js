const inquirer = require('inquirer');
const fs = require('fs');
const { FORMERR } = require('dns');

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

    const fontColor = response.textcolor;
    const shapeColor = response.shapeColor;
    const logoText = response.logoText;

    if (logoText.length < 1 || logoText.length > 3) {
        console.log("You have not selected the correct number of characters. You may choose up to 3.");
        return;
    };

    switch (response.selectedShape) {
        case 'circle':
            const chosenCircle = new Circle (shapeColor, fontColor, logoText);
            console.log(chosenCircle);
            break;
        case 'triangle':
            var chosenShape = `<svg height="200" width="300">
    <polygon points="100,10 0,200 200,200" fill="${shapeColor}"/>
    <text x="60" y="140" fill="${fontColor}" font-size="3rem">${logoText}</text>
</svg>`
            break;
        case 'square':
            var chosenShape = `<svg width="300" height="200">
            <rect width="200" height="200" fill="${shapeColor}"/>
            <text x="50" y="110" fill="${fontColor}" font-size="3rem">${logoText}</text>
        </svg>`
    }

    // const descrLearned = response.descriptionLearned;
    // const projectInstallation = response.installation;
    // const projectUsage = response.usage;
    // const licenseBadge = chosenLicenseLink;
    // const licenseChosen = projectLicense;
    // const projectContributions = response.contributing;
    // const projectTests= response.tests;
    // const gitHubUser = response.githubUsername;
    // const userEmail = response.email;

    convertToHTML(chosenShape)
    });

function convertToHTML(chosenShape) {
    var svgVersion = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${chosenShape}
    </body>
    </html>`;

    writeToSVG (svgVersion);
};

function writeToSVG (svgVersion) {
    fs.writeFile(logo.svg, (svgVersion), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
    );
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();