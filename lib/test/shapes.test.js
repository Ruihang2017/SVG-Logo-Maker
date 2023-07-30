const Shapes = require("../shapes");

describe("Shapes", () => {
    describe("Instantiate", () => {
        it("shoud be an instance of Shapes class", () => {
            const shape = new Shapes("test", "red", "yellow");
            expect(shape).toBeInstanceOf(Shapes);
            expect(shape.text).toEqual("test");
            expect(shape.textColour).toEqual("red");
            expect(shape.shapeColour).toEqual("yellow");
        })
    });

    describe("render", () => {
        it("Calling render() function inside of the shape should thrown an error", () => {
            const err = Error("Child class must implement createShape() method");
            expect(() => new Shapes("test", "red", "yellow").render()).toThrowError(err);
        })
    });

    describe("renderText", () => {
        it("Calling render() function inside of the shape should thrown an error", () => {
            const shapeRenderText = new Shapes("test", "red", "yellow").renderText();
            const str = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="red">test</text>`;
            expect(shapeRenderText).toEqual(str);
        })
    });
})