const Shapes = require('../lib/shapes')

class Square extends Shapes {
    getHTML() {
        let svgVersion = `<svg width="300" height="200">
        <rect width="200" height="200" fill="${shapeColor}"/>
        <text x="50" y="110" fill="${fontColor}" font-size="3rem">${logoText}</text>
    </svg>`;
    return svgVersion;
    }
}

module.exports = Square;