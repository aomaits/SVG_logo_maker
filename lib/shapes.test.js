const Shapes = require('../lib/shapes');

describe('Shapes', () => {
    it('should pass the value for the font color', () => {

        const shapes = new Shapes("blue", "red", "Dan");
        expect(shapes.fontColor).toEqual("red");
    })

    it('should pass the value for the shape color', () => {

        const shapes = new Shapes("blue", "red", "Dan");
        expect(shapes.shapeColor).toEqual("blue");
    })

    it('should pass the value for the SVG logo', () => {

        const shapes = new Shapes("blue", "red", "Dan");
        expect(shapes.logoText).toEqual("Dan");
    })

    it('should check to see if there are more than 3 characters in the SVG logo', function() {
        const shapes = new Shapes("blue", "red", "Daniel");
        expect(shapes.logoText.length).toBeGreaterThan(3);
    })
})