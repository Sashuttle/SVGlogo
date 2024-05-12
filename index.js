const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

// SVG class that renders shapes and text
class SVG {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.elements = [];
  }

  // Add circle
  addCircle(radius, color) {
    const circle = `<circle cx="${this.width / 2}" cy="${this.height / 2}" r="${radius}" fill="${color}" />`;
    this.elements.push(circle);
  }

  // Add square (rectangle)
  addRectangle(x, y, width, height, color) {
    const rect = `<rect x="${x}px" y="${y}px" width="${width}px" height="${height}px" fill="${color}" />`;
    this.elements.push(rect);
  }

  // Add triangle
  addTriangle(points, color) {
    const triangle = `<polygon points="${points}" fill="${color}" />`;
    this.elements.push(triangle);
  }

  // Add text
  drawText(text, x, y, color) {
    const textElement = `<text x="${x}" y="${y}" fill="${color}" font-size="50" text-anchor="middle" dominant-baseline= "middle">${text}</text>`;
    this.elements.push(textElement);
  }

  // Render the complete SVG content
  render() {
    const content = this.elements.join('\n');
    return `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
  }
}

// Questions for user input to generate the shapes
const questions = [
  {
    type: "input",
    name: "text",
    message: "Text: Enter up to three characters for your logo.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Text-Color: Enter a color or hexadecimal number for your logo.",
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
    message: "Shape-Color: Enter a color or hexadecimal number for your logo.",
  },
];

// Function to ask questions and write to file
const listOfQuestions = (questions, callback) => {
  return inquirer.prompt(questions).then((answers) => {
    const { text, textColor, shapes, shapesColor } = answers;
    const svg = new SVG(200, 300);

    // Create the shape based on user input
    if (shapes === "Circle") {
      svg.addCircle(90, shapesColor);
      svg.drawText(text, 100, 150, textColor);
    } else if (shapes === "Square") {
      svg.addRectangle(10, 20, 600, 400, shapesColor);
      svg.drawText(text, 100, 150, textColor);
    } else if (shapes === "Triangle") {
      const points = "100,0 200,150 0,150";
      svg.addTriangle(points, shapesColor);
      svg.drawText(text, 100, 100, textColor);
    }

    // Render the SVG content and call the callback with it
    const svgContent = svg.render();
    callback(svgContent); 
  });
};

// Function to write SVG content to a file
const writeToFile = (svgContent) => {
  const currentSeconds = Math.floor(Date.now() / 1000);
  fs.writeFile("./examples/logo-"+currentSeconds+".svg", svgContent, (err) => {
    if (err) {
      console.error("Error writing the SVG file:", err);
    } else {
      console.log("SVG file './examples/logo-"+currentSeconds+".svg' created successfully.");
    }
  });
};

// Call listOfQuestions with questions and the writeToFile callback
listOfQuestions(questions, writeToFile);
