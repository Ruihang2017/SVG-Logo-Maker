const Shapes = require("./shapes");

class Triangle extends Shapes {
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour);
    }
    render() {
        return `
        <polygon points="150, 20  60, 180 240, 180" fill="${this.renderShapeColour()}" />
        ${this.renderText("150")}
        `;
    }
}

module.exports = Triangle;