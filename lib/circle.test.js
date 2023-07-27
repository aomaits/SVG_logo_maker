const Circle = require('../lib/circle');

describe('Circle', () => {
    it('should pass the value for the font color', () => {

        const circle = new Circle("blue", "red", "Dan");
        expect(circle.fontColor).toEqual("red");
    })
})