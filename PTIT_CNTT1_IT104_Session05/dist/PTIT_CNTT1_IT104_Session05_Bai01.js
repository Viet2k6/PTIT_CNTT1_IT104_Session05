"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const vehicle1 = new Vehicle("Fortuner", 2021, "Toyota");
const vehicle2 = new Vehicle("Accord", 2023, "Honda");
console.log(`Tên: ${vehicle1.name}, Năm sản xuất: ${vehicle1.year}, Hãng: ${vehicle1.company}`);
console.log(`Tên: ${vehicle2.name}, Năm sản xuất: ${vehicle2.year}, Hãng: ${vehicle2.company}`);
