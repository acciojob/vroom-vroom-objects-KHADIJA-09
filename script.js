// Car Constructor Function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Method added to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar Constructor Function
function SportsCar(make, model, topSpeed) {
    // Inherit properties from Car
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit Car prototype methods
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// // Testing the implementation
// const car = new SportsCar("Ferrari", "Testarossa", 200);
// console.log(car.getMakeModel());  // Output: Ferrari Testarossa
// console.log(car.getTopSpeed());   // Output: 200


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
