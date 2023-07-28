const Shapes = require('../lib/shapes')

class Square extends Shapes {
    constructor(shapeColor, fontColor, logoText) {
        super(shapeColor, fontColor, logoText);
    }

    getHTML() {
        let svgVersion = `<svg width="300" height="200">
    <rect width="200" height="200" fill="${this.shapeColor}"/>
    <text x="55" y="110" fill="${this.fontColor}" font-size="3rem">${this.logoText}</text>
</svg>`;

    return svgVersion;
    }
}

module.exports = Square;