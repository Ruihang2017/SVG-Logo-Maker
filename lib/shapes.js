class Shapes {
    constructor(text, textColour, shapeColour) {
        this.text = text;
        this.textColour = textColour;
        this.shapeColour = shapeColour;
    }

    // this must be implemented by the children class
    render() {
        throw new Error("Child class must implement createShape() method");
    }

    renderShapeColour() {
        return this.shapeColour;
    }

    // the text height for the different shapes are different
    renderText(y = "120") {
        return `<text x="150" y="${y}" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>`;
    }
}

module.exports = Shapes;