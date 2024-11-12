"use strict";

const aPrice = 1.50;
const bPrice = 1.70;
const n1Quantity = 3; 
const n2Quantity = 2;
const n3Quantity = 1;
let bunsPrice = +prompt("Įveskite bandelės kainą:");

if (bunsPrice < aPrice) {
    let aPriceResult = bunsPrice * n1Quantity;
    console.log(`Už bandeles bus sumokėta: ${aPriceResult.toFixed(2)}`);
} else if (bunsPrice > aPrice && bunsPrice < bPrice) {
    let bPriceResult = bunsPrice * n2Quantity;
    console.log(`Už bandeles bus sumokėta: ${bPriceResult.toFixed(2)}`);
} else if (bunsPrice > bPrice) {
    let result = bunsPrice * n3Quantity;
    console.log(`Už bandeles bus sumokėta: ${result.toFixed(2)}`);
}