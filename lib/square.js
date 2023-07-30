const Shapes = require("./shapes");

class Square extends Shapes {
    constructor(colour) {
        super(colour);
    }

    render() {
        return `<rect x="100" y="50" width="100" height="100" fill=${this.renderColour()} rx="10" ry="10" />`;
    }
}

module.exports = Square;