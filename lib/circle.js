const Shapes = require('../lib/shapes')

class Circle extends Shapes {
    constructor(shapeColor, fontColor, logoText) {
        super(shapeColor, fontColor, logoText);
        console.log("circle class accessed");
        console.log(logoText);
        console.log(fontColor);
    }
    // 
    getHTML() {
        let svgVersion = `<svg height="200" width="300">
            <circle cx="100" cy="100" r="95" fill="${this.shapeColor}" />
            <text x="60" y="110" fill="${this.fontColor}" font-size="3rem">${this.logoText}</text>
        </svg>`;
        console.log("circle class accessed");
        return svgVersion;
    };
};

module.exports = Circle;