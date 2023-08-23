const Dealership = require('./Dealership')
const Car = require('./Car');
const { default: expect } = require('expect');


describe('Dealership', () => {
    let dealership;

    beforeEach(() => {
        dealership = new Dealership('Bobs', 50)
    });

    test('can count the number of cars in stock', () => {
        const car1 = new Car('Toyota', 25000, 'Gas');
        const car2 = new Car('Honda', 30000, 'Electric');
        const car3 = new Car('Mazda', 45000, 'Electric');
        
        dealership.addCar(car1);
        dealership.addCar(car2);
        dealership.addCar(car3);
        
        expect(dealership.countCars()).toBe(3); 
    }); 

    test('can add a car to stock', () => {
        const car = new Car('Mazda', 45000, 'Electric');
        dealership.addCar(car);

        expect(dealership.countCars()).toBe(1);
        });

    test('can return an array containing each cars manufacturer', () => {
        const car1 = new Car('Mazda', 45000, 'Electric');
        const car2 = new Car('Honda', 30000, 'Electric');

        dealership.addCar(car1);
        dealership.addCar(car2);

        const manufacturers = dealership.getManufacturers();
        expect(manufacturers).toEqual(['Mazda', 'Honda']);

        });

    test('can find all the cars from a given manufacturer', () => {
        const car1 = new Car('Toyota', 25000, 'Gas');
        const car2 = new Car('Toyota', 32000, 'Hybrid');
        const car3 = new Car('Honda', 30000, 'Electric');
        const car4 = new Car('Mazda', 45000, 'Electric');

        dealership.addCar(car1);
        dealership.addCar(car2);
        dealership.addCar(car3);
        dealership.addCar(car4);

        const toyotaCars = dealership.getCarsByManufacturer('Toyota');
        expect(toyotaCars).toHaveLength(2);
    });

    test('can find the total value of cars in stock', () => {
        const car1 = new Car('Ford', 28000, 'Diesel');
        const car2 = new Car('Toyota', 25000, 'Gas');
        const car3 = new Car('Toyota', 32000, 'Hybrid');
        const car4 = new Car('Honda', 30000, 'Electric');
        const car5 = new Car('Mazda', 45000, 'Electric');

        dealership.addCar(car1);
        dealership.addCar(car2);
        dealership.addCar(car3);
        dealership.addCar(car4);
        dealership.addCar(car5);

        const totalValue = dealership.getTotalValueOfCars();
        expect(totalValue).toBe(160000)
        });
}); 

