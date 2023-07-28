const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('../SVG_logo_maker/lib/circle');
const Triangle = require('../SVG_logo_maker/lib/triangle');
const Square = require('../SVG_logo_maker/lib/square');

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

    const fontColor = response.textColor;
    const shapeColor = response.shapeColor;
    const logoText = response.logoText;

    switch (response.selectedShape) {
        case 'circle':
            const chosenCircle = new Circle(shapeColor, fontColor, logoText);
            // convertToHTML(chosenCircle);
            console.log('this is the shapeColor var= ' + shapeColor)
            console.log('this is the fontColor var= ' + fontColor)
            console.log('this is the logoText var= ' + logoText)
            console.log('this is the chosenCircle object= ' + chosenCircle)
            convertToHTML(chosenCircle);
            break;
        case 'triangle':
            const chosenTriangle = new Triangle (shapeColor, fontColor, logoText);
            convertToHTML(chosenTriangle);
            break;
        case 'square':
            const chosenSquare = new Square (shapeColor, fontColor, logoText);
            convertToHTML(chosenSquare);
            break;

    }
    });



function convertToHTML(chosenShape) {
    var logoRender = chosenShape.getHTML();

    writeToSVG (logoRender);
};

function writeToSVG (logoRender) {
    fs.writeFile('Example.svg', (logoRender), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
    );
}

function init() {
    
}

init();