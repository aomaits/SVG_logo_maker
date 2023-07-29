const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it('should create an HTML string for a yellow triangle with darkblue text that reads JAN', () => {
        const svgHTML = `<svg height="200" width="300">
    <polygon points="100,10 0,200 200,200" fill="yellow"/>
    <text x="50" y="140" fill="darkblue" font-size="3rem">JAN</text>
</svg>`
        const triangle = new Triangle("yellow", "darkblue", "JAN");
        expect(triangle.getHTML()).toEqual(svgHTML);
    })
})