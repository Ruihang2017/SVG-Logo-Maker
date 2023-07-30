const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { createSVG } = require('./svg');
const { join } = require('path');

// create a client class
class CLI {
    constructor() {
        console.log("A new CLI");
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'fileName',
                    message: 'Enter the file name for the .svg file',
                },
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter the text for the .svg file',
                },
                {
                    type: 'input',
                    name: 'textColour',
                    message: 'Input a colour for your .svg text',
                },
                {
                    type: 'list',
                    name: 'shapeType',
                    message: 'Select a shapetype for your .svg file',
                    choices: ['square', 'triangle', 'circle'],
                },
                {
                    type: 'input',
                    name: 'shapeColour',
                    message: 'Input a colour for your .svg shape',
                }
            ])
            .then(({ fileName, text, textColour, shapeType, shapeColour }) => {
                // create a svg file
                return writeFile(
                    join(__dirname, '..', 'examples', `${fileName}.svg`),
                    createSVG({ text, textColour, shapeType, shapeColour })
                );
            })
            .catch(err => console.error(err));
    }
}

module.exports = CLI;
