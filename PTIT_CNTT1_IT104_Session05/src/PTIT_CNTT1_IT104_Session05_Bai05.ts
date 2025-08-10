class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getWidth(): number {
        return this.width;
    }
    public setWidth(newWidth: number): void {
        this.width = newWidth;
    }
    public getHeight(): number {
        return this.height;
    }
    public setHeight(newHeight: number): void {
        this.height = newHeight;
    }
    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
    public getArea(): number {
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
