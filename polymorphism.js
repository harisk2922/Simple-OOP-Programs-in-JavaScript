class Shape {
    calculateArea() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return this.length * this.width;
    }
}

class Circle extends Shape {
    constructor (radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const myRectangle = new Rectangle(10,5);
const myCircle = new Circle(4);

console.log('Rectangle Area: ' + myRectangle.calculateArea());
console.log('Circle Area: ' + myCircle.calculateArea());