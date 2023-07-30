const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

const createSVG = ({ text, textColour, shapeType, shapeColour }) => {

    // get the SVG shape
    let svgShape;
    switch (shapeType) {
        case "square":
            svgShape = new Square(text, textColour, shapeColour).render();
            break;
        case "triangle":
            svgShape = new Triangle(text, textColour, shapeColour).render();
            break;
        case "circle":
            svgShape = new Circle(text, textColour, shapeColour).render();
            break;
        default:
            svgShape = new Circle(text, textColour, shapeColour).render();
            break;
    }

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgShape}
    </svg>`;
}

module.exports = { createSVG };