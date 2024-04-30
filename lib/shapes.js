class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = (color);
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100%" cy="100%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="100" width="500" height="500" fill="${this.color}">`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height="200%" width="200%" points="0, 300 400, 300 250, 0" fill='${this.color}>`
    }
};


module.exports = {Circle, Square, Triangle}