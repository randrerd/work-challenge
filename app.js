
//Services
const vehicles = require('./services/cars.services');

let separator = '=============================='
vehicles.getVehicles()
console.log(separator)
console.log(vehicles.getMostExpensiveCar())
console.log(vehicles.getCheapestCar())
console.log(vehicles.getCarByLetter('Y'))
console.log(separator)
vehicles.sortVehicles()