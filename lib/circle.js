const Shapes = require("./shapes");

class Circle extends Shapes {
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour);
    }

    render() {
        return `
        <circle cx="150" cy="100" r="80" fill="${this.renderShapeColour()}" />
        ${this.renderText()}`;
    }
}

module.exports = Circle;