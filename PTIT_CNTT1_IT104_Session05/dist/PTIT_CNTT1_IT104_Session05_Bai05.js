"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(newWidth) {
        this.width = newWidth;
    }
    getHeight() {
        return this.height;
    }
    setHeight(newHeight) {
        this.height = newHeight;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    getArea() {
        return this.width * this.height;
    }
}
const rect = new Rectangle(8, 6);
console.log("Chiều rộng:", rect.getWidth());
console.log("Chiều dài:", rect.getHeight());
console.log("Chu vi:", rect.getPerimeter());
console.log("Diện tích:", rect.getArea());
rect.setWidth(12);
rect.setHeight(9);
console.log("Chiều rộng mới:", rect.getWidth());
console.log("Chiều dài mới:", rect.getHeight());
console.log("Chu vi mới:", rect.getPerimeter());
console.log("Diện tích mới:", rect.getArea());
