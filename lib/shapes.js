class Circle {
    constructor (shapeColor, fontColor, logoText) {
        this.fontColor = fontColor;
        this.shapeColor = shapeColor;
        this.logoText = logoText;
    }

    getHTML() {
        let svgVersion = `<svg height="200" width="300">
        <circle cx="100" cy="100" r="95" fill="${shapeColor}" />
        <text x="60" y="110" fill="${fontColor}" font-size="3rem">${logoText}</text>
    </svg>`;
    return svgVersion;
    };
};

class Triangle {
    constructor (shapeColor, fontColor, logoText) {
        this.fontColor = fontColor;
        this.shapeColor = shapeColor;
        this.logoText = logoText;
    };

    getHTML() {
        let svgVersion = `<svg height="200" width="300">
        <polygon points="100,10 0,200 200,200" fill="${shapeColor}"/>
        <text x="60" y="140" fill="${fontColor}" font-size="3rem">${logoText}</text>
    </svg>`;
    return svgVersion;
    }
};

class Square {
    constructor (shapeColor, fontColor, logoText) {
        this.fontColor = fontColor;
        this.shapeColor = shapeColor;
        this.logoText = logoText;
    };

    getHTML() {
        let svgVersion = `<svg width="300" height="200">
        <rect width="200" height="200" fill="${shapeColor}"/>
        <text x="50" y="110" fill="${fontColor}" font-size="3rem">${logoText}</text>
    </svg>`;
    return svgVersion;
    }
}