const Shapes = require("./shapes");

class Circle extends Shapes {
    constructor(colour) {
        super(colour);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill=${this.renderColour()} />`;
    }
}

module.exports = Circle;