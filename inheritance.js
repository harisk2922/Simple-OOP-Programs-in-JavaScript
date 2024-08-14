class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log('Car: ' + this.make + ' ' + this.model + ' ' + this.year);
    }
}

const myCar = new Car('Honda', 'Civic', 2024);
myCar.displayDetails();

class ElectricCar extends Car {
    constructor(make, model, year, batterylife) {
        super(make, model, year);
        this.batterylife = batterylife;
    }

    displayDetails() {
        super.displayDetails();
        console.log('Battery Life: ' + this.batterylife);
    }
}

const myElectricCar = new ElectricCar('Tesla', 'S', 2024, 15);
myElectricCar.displayDetails();
