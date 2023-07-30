const Shapes = require("./shapes");

class Square extends Shapes {
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour);
    }

    render() {
        return `
        <rect x="100" y="50" width="100" height="100" fill=${this.renderShapeColour()} rx="10" ry="10" />
        ${this.renderText()}`;
    }
}

module.exports = Square;