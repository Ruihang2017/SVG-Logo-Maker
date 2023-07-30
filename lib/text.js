const Shapes = require("./shapes");

class Text extends Shapes {
    constructor(colour, text) {
        super(colour);
        this.text = text;
    }
    render() {
        return `<text x="150" y="120" font-size="60" text-anchor="middle" fill=${this.renderColour()}>${this.text}</text>`;
    }
}

module.exports = Text;