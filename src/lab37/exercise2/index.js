function getFastestCar(cars) {
  return cars.sort((car1, car2) => car2.speed - car1.speed)[0];
}

const cars = [
  { name: 'c1', color: 'red', speed: 40 },
  { name: 'c2', color: 'blue', speed: 20 },
  { name: 'c3', color: 'blue', speed: 30 }
];

const fastestCar = getFastestCar(cars);
console.log(fastestCar.name);
