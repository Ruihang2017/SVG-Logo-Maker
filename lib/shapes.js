class Shapes {
    constructor() {
        console.log(`This is the constructor of Shapes`);
    }

    createShape() {
        throw new Error("Child class must implement createShape() method");
    }

}

module.exports = Shapes;