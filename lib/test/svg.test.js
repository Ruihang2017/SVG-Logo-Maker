const Shapes = require("../shapes");

describe("Shapes", () => {
    describe("Instantiate", () => {
        it("shoud be an instance of Shapes class", () => {
            const shape = new Shapes("test", "red", "yellow");
            expect(shape).toBeInstanceOf(Shapes);
        })
    })
})