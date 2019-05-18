class Rectangle {

    constructor(width, height, color) {

        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {

        let sum = this.width * this.height;
        return sum;
    }
}