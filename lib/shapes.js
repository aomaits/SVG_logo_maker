class Shapes {
    constructor (shapeColor, fontColor, logoText) {
        this.fontColor = fontColor;
        this.shapeColor = shapeColor;
        this.logoText = logoText;

        if (logoText.length < 1 || logoText.length > 3) {
            console.log("You have not selected the correct number of characters. You may choose up to 3.");
            return;
        };
        console.log("shapes class accessed")
    }
}

module.exports = Shapes;