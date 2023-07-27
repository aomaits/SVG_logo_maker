const Shapes = require('../lib/shapes')

class Triangle extends Shapes {
    getHTML() {
        let svgVersion = `<svg height="200" width="300">
        <polygon points="100,10 0,200 200,200" fill="${shapeColor}"/>
        <text x="60" y="140" fill="${fontColor}" font-size="3rem">${logoText}</text>
    </svg>`;
    return svgVersion;
    }
};

module.exports = Triangle;