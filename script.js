}
// Car Class
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return `${this.make} ${this.model}`;
    }
}

// SportsCar Class extending Car
class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model);  // Call the parent class constructor
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}

// Testing
// const car = new SportsCar("Ferrari", "Testarossa", 200);
// console.log(car.getMakeModel());  // Output: Ferrari Testarossa
// console.log(car.getTopSpeed());   // Output: 200

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
