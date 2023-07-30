const Triangle = require("../triangle");

describe("Triangle", () => {
    describe("Instantiate", () => {
        it("shoud be an instance of Triangle class", () => {
            const triangle = new Triangle("test", "red", "yellow");
            expect(triangle).toBeInstanceOf(Triangle);
        })
    });
})