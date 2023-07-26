class Circle {
    constructor (shapeColor, fontColor, logoText) {
        this.fontColor = fontColor;
        this.shapeColor = shapeColor;
        this.logoText = logoText;

        // Fix this formatting
        getHTML () {
            var svgVersion = `<svg height="200" width="300">
            <circle cx="100" cy="100" r="95" fill="${shapeColor}" />
            <text x="60" y="110" fill="${fontColor}" font-size="3rem">${logoText}</text>
        </svg>`;
        };
    }
};

class Triangle {

};

class Square {
    
}