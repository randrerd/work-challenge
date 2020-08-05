

const vehicles = [
  {
    id: 0,
    marca: "Peugeot",
    modelo: "206",
    puertas: 4,
    precio: 200000,
  },
  {
    id: 1,
    marca: "Honda",
    modelo: "Titan",
    cilindrada: "125c",
    precio: 60000,
  },
  {
    id: 2,
    marca: "Peugeot",
    modelo: "208",
    puertas: 5,
    precio: 250000,
  },
  {
    id: 3,
    marca: "Yamaha",
    modelo: "YBR",
    cilindrada: "160c",
    precio: 80500.5,
  },
];

function priceFormatting(object) {
  let formattedPrecio;
  //Splits price amount to an array containing the integer and the decimals
  let arrayPrecio = object.precio.toString().split(".");
  let integer = arrayPrecio[0];
  if (integer.length >= 6) {
    //If the price is over 100.000
    integerArray = integer.split("");
    //Adds the . to specify the hundreds
    integerArray.splice(3, 0, ".");
  } else {
    //Adds the . to specify the tens
    integerArray = integer.split("");
    integerArray.splice(2, 0, ".");
  }
  //Joins the created arrays into formatted strings
  !arrayPrecio[1]
    ? (formattedPrecio = `$${integerArray.join("")},00`)
    : (formattedPrecio = `$${integerArray.join("")},${arrayPrecio[1]}0`);
  return formattedPrecio;
}

function sortVehicles() {
  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const precioA = a.precio;
    const precioB = b.precio;

    let comparison = 0;
    if (precioA < precioB) {
      comparison = 1;
    } else if (precioA > precioB) {
      comparison = -1;
    }
    return comparison;
  }
  let sortedVehicles = vehicles.sort(compare);
  let response = `Vehículos ordenados por precio de mayor a menor:`;
  console.log(response);
  sortedVehicles.forEach((vehicle) => {
    console.log(`${vehicle.marca} ${vehicle.modelo}`);
  });
}

function getVehicles() {
  for (let i = 0; i < vehicles.length; i++) {
    //Loops over the cars array
    const vehicle = vehicles[i];

    //Price formatting
    let formattedPrecio = priceFormatting(vehicle);

    //Checks if the vehicle is a car or a motorcycle and formats it accordingly
    if (vehicle.puertas) {
      console.log(
        `Marca: ${vehicle.marca} // Modelo: ${vehicle.modelo} // Puertas: ${vehicle.puertas} // Precio: ${formattedPrecio}`
      );
    } else {
      console.log(
        `Marca: ${vehicle.marca} // Modelo: ${vehicle.modelo} // Cilindrada: ${vehicle.cilindrada} // Precio: ${formattedPrecio}`
      );
    }
  }
}

function getCheapestCar() {
  let cheapestCar = vehicles.reduce((prev, curr) =>
    prev.precio < curr.precio ? prev : curr
  );

  return `Vehículo más barato: ${cheapestCar.marca} ${cheapestCar.modelo}`;
}

function getMostExpensiveCar() {
  let mostExpensiveCar = vehicles.reduce((prev, curr) =>
    prev.precio > curr.precio ? prev : curr
  );

  return `Vehículo más caro: ${mostExpensiveCar.marca} ${mostExpensiveCar.modelo}`;
}

function getCarByLetter(letter) {
  let array = vehicles.filter((car) => car.modelo.startsWith(letter));
  let car = array[0];
  let formattedPrice = priceFormatting(car);

  return `Vehículo que contiene en el modelo la letra '${letter}': ${car.marca} ${car.modelo} ${formattedPrice}`;
}

module.exports = {
  getVehicles: getVehicles,
  getCheapestCar: getCheapestCar,
  getMostExpensiveCar: getMostExpensiveCar,
  getCarByLetter: getCarByLetter,
  sortVehicles: sortVehicles,
};
