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
        this.price = newCapacity;
    }
        
    Dealership.prototype.getDealershipName = function() {return this.dealershipName}
    Dealership.prototype.getCapacity = function () { return this.capacity}

    Dealership.prototype.getCarsInStock = function () {return this.getCarsInStock} 

// Methods

countCars = function() {
    return this.capacity.length;
}

function addCar(car) {
    if (this.carsInStock.length < this.capacity) {
        this.carsInStock.push(car);
    }
}

getManufacturers = () => {
    return this.carsInStock.map(car => car.manufacturer)
}

// The above are three different ways in which you can call a function

getTotalValueOfCars = function() {
    return this.carsInStock.reduce((total, car) => total + car.price, 0);
}






    




