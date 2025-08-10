"use strict";
class Veh {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Tên xe: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng sản xuất: ${this.company}`);
    }
}
const veh = new Veh(1, "Honda Civic", 2022, "Honda");
veh.printInfo();
