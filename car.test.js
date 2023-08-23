const Car = require('./Car');

describe('Car', () => {

    test('should correctly access the manufacturer', () => {
        const car = new Car('Toyota', 25000, 'Gas');
        expect(car.manufacturer).toBe('Toyota');
    });

    test('should correctly access the price', () => {
        const car = new Car('Honda', 30000, 'Electric');
        expect(car.price).toBe(30000);
    });

    test('should correctly access the engineType', () => {
        const car = new Car('Ford', 28000, 'Diesel');
        expect(car.engineType).toBe('Diesel');
    });
}); 
 