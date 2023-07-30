const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
// const SVG = requirea('./svg');

const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

class CLI {
    constructor() {
        console.log("A new CLI");
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter the text for the .svg file',
                },
                {
                    type: 'list',
                    name: 'textColour',
                    message: 'Select a colour for your .svg file',
                    choices: ['white', 'blue', 'red', 'green', 'purple'],
                },
                {
                    type: 'list',
                    name: 'shapeType',
                    message: 'Select a shapetype for your .svg file',
                    choices: ['square', 'triangle', 'circle'],
                },
                {
                    type: 'list',
                    name: 'shapeColour',
                    message: 'Select a colour for your .svg shape',
                    choices: ['white', 'blue', 'red', 'green', 'purple'],
                }
            ])
            .then(({ text, textColour, shapeType, shapeColour }) => {
                // this.tasks.push({ text, priority });
                // if (confirmAddTask) {
                //     return this.addTask();
                // }
                console.log(`text:${text}, textColour:${textColour}, shapeType:${shapeType},shapeColour:${shapeColour}`);
            })
            .catch(err => console.error(err));
    }
}

module.exports = CLI;
