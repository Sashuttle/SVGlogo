//Note: Importing the Circle, Square, and Triangle shape classes from the shapes.js file and testing it
const { Circle, Square, Triangle } = require('./shapes');

//Note: Test Circle
describe('Circle', () => {
    test('Shape correctly renders', () => {
        const shape = new Circle();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="100%" cy="100%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

//Note: Test Square
describe('Square', () => {
    test('Shape correctly renders', () => {
        const shape = new Square();
        var color = ('yellow')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="100" width="500" height="500" fill="${color}">`);
    });
});

//Note: Test Triangle
describe('Triangle', () => {
    test('Shape correctly renders', () => {
        const shape = new Triangle();
        var color = ('Red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="200%" width="200%" points="0, 300 400, 300 250, 0" fill='${color}>`);
    });
});


//Note: After adding test code and fixing a typo, when running npm test I get Passed tests