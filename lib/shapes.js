class Shapes {
    constructor(colour) {
        this.colour = colour;
    }

    // this must be implemented by the children class
    render() {
        throw new Error("Child class must implement createShape() method");
    }

    // everyshapes has a fill colour, this renders that
    renderColour() {
        return this.colour;
    }
}

module.exports = Shapes;