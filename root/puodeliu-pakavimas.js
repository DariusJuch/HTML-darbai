"use strict";

function calculateCupPacking(totalCups) {
  const cupsPerBox = 3;
  const fullBox = Math.floor(totalCups / cupsPerBox);
  const remainingCups = totalCups % cupsPerBox;

    return{
        fullBox: fullBox,
        remainingCups: remainingCups
    };
};

let totalCups = +prompt("Puodelių, kuriuos reikia supakuoti, skaičius:");
const result = calculateCupPacking(totalCups);

console.log(`Pilnų dėžučių skaičius: ${result.fullBox}`);
console.log(`Nesupakuotų puodelių skaičius: ${result.remainingCups}`);
