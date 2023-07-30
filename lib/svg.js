const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');
const Text = require('./text')

const createSVG = ({ text, textColour, shapeType, shapeColour }) => {

    // get the SVG shape
    let svgShape;
    switch (shapeType) {
        case "square":
            svgShape = new Square(shapeColour).render();
            break;
        case "triangle":
            svgShape = new Triangle(shapeColour).render();
            break;
        case "circle":
            svgShape = new Circle(shapeColour).render();
            break;
        default:
            svgShape = new Circle(shapeColour).render();
            break;
    }

    // get the SVG TEXT
    const svgText = new Text(textColour, text).render();


    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgShape}${svgText}
    </svg>`;
}

module.exports = { createSVG };