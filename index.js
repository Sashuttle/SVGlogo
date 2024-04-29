// imprts the f
const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

//SVG class that has a constructor to reder the three shapes, their text and colors
class SVG{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    drawCircle(radius, color) {
        return `<svg width="${this.width}" height="${this.height}>
                    circle cx="${this.width / 2}" cy="${this.height / 2}" r="${radius}" fill="${color}"
                    </svg>`;
    }
    drawRectangle(x, y, width, height, color) {
        return `<svg width="${this.width}" height="${this.height}">
                    <rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${color}" />
                </svg>`;
    }

    drawText(text, x, y, color) {
        return `<svg width="${this.width}" height="${this.height}">
                    <text x="${x}" y="${y}" fill="${color}">${text}</text>
                </svg>`;
    }
}

//Questions for user input to generate the shapes
const questions = [
    {
        type: "input",
        name: "text",
        message:"Text: Enter up to three characters for your logo.",
    },

    {
        type: "input",
        name: "textColor",
        message: "Text-Color: Enter a color or a hexadecimal number for your logo.",
    },

    {
        type: "list",
        name: "shapes",
        message: "Please choose a shape for your logo.",
        choices: ["Circle", "Square", "Triangle"],
    },

    {
        type: "input",
        name: "shapesColor",
        message: "Shapes-Color: Enter a color or a hexadecimal number for your logo.",
    },
];