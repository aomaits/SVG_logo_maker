const Shapes = require('../lib/shapes')

class Triangle extends Shapes {
    constructor(shapeColor, fontColor, logoText) {
        super(shapeColor, fontColor, logoText);
    }
 
    getHTML() {
        let svgVersion = `<svg height="200" width="300">
    <polygon points="100,10 0,200 200,200" fill="${this.shapeColor}"/>
    <text x="50" y="140" fill="${this.fontColor}" font-size="3rem">${this.logoText}</text>
</svg>`;
    
    return svgVersion;
    }
};

module.exports = Triangle;