const Dealership = function(dealershipName, capacity){
    this.dealershipName = dealershipName;
    this.capacity = capacity;
    this.carsInStock = [];
}

// Getters and Setters

    Dealership.prototype.setDealershipName = function(newName) {
    this.dealershipName = newName;
    }
    
    Dealership.prototype.setCapacity = function(newCapacity) {
        this.capacity = newCapacity;
    }
        
    Dealership.prototype.getDealershipName = function() {return this.dealershipName}
    Dealership.prototype.getCapacity = function () { return this.capacity}

    Dealership.prototype.getCarsInStock = function () {return this.getCarsInStock} 

// Methods

Dealership.prototype.countCars = function () {
    return this.carsInStock.length;
};

Dealership.prototype.addCar = function(car) {
    if (this.carsInStock.length < this.capacity) {
        this.carsInStock.push(car);
    } else {
        throw new Error('Dealership is at full capacity');
    }
};

Dealership.prototype.getManufacturers = function() {
    return this.carsInStock.map(car => car.manufacturer);
}

Dealership.prototype.getCarsByManufacturer = function(manufacturer) {
    return this.carsInStock.filter(car => car.manufacturer === manufacturer);
}

Dealership.prototype.getTotalValueOfCars = function() {
    return this.carsInStock.reduce((total, car) => total + car.price, 0);
}


// You can call a function through the below examples
// countCars = function(){}
// function countCars(){}
// countCars = () => {}



module.exports = Dealership;






    




