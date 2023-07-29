const Circle = require('../lib/circle');

describe('Circle', () => {
    it('should create an HTML string for a lightblue circle with purple text that reads DAN', () => {
        const svgHTML = `<svg height="200" width="300">
    <circle cx="100" cy="100" r="95" fill="lightblue" />
    <text x="50" y="115" fill="purple" font-size="3rem">DAN</text>
</svg>`
        const circle = new Circle("lightblue", "purple", "DAN");
        // console.log(circle);
        expect(circle.getHTML()).toEqual(svgHTML);
    })
})