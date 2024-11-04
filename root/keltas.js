"use strict";

function calculateFerryCanMove(totalCar){
    const canMoveCar = 10;
    const fullFerry = Math.floor(totalCar / canMoveCar);
    const remainingCars = totalCar % canMoveCar;

      return{
        fullFerry: fullFerry,
        remainingCars: remainingCars
      };
};

const totalCar = +prompt("Automobilių skaičius:");
const result = calculateFerryCanMove(totalCar);

console.log(`Perkels per kartų: ${result.fullFerry}`);
console.log(`Liks neperkelta: ${result.remainingCars}`);