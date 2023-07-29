const Square = require('../lib/square');

describe('Square', () => {
    it('should create an HTML string for a lightblue square with purple text that reads TIM', () => {
        const svgHTML = `<svg width="300" height="200">
    <rect width="200" height="200" fill="lightblue"/>
    <text x="55" y="110" fill="purple" font-size="3rem">TIM</text>
</svg>`
        const square = new Square("lightblue", "purple", "TIM");
        expect(square.getHTML()).toEqual(svgHTML);
    })
})