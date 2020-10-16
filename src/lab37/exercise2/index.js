function getFastestCar(cars) {
  let fastestCar = { speed: 0 };
  for (let index = 0; index < cars.length; index++) {
    const car = cars[index];
    if (car.speed > fastestCar.speed) {
      fastestCar = car;
    }
  }

  return fastestCar;
}

const cars = [
  { name: 'c1', color: 'red', speed: 40 },
  { name: 'c2', color: 'blue', speed: 20 },
  { name: 'c3', color: 'blue', speed: 30 }
];

const fastestCar = getFastestCar(cars);
console.log(fastestCar.name);
