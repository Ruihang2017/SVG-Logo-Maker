const Shapes = require("./shapes");

class Triangle extends Shapes {
    constructor(colour) {
        super(colour);
    }
    render() {
        return `<polygon points="150, 20  60, 180 240, 180" fill=${this.renderColour()} />`;
    }
}

module.exports = Triangle;