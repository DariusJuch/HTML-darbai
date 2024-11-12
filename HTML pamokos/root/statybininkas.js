"use strict";
let a = +prompt("Sienos ilgis m");
let h = +prompt("Sienos aukštis m");
let k = +prompt("Plytos kaina Lt");
let brickLength = +prompt("plytų ilgis m");
let brickHeight = +prompt("plytų aukštis m");
let brickQuantity = Math.round( (a * h) / (brickLength * brickHeight) );
let price = (brickQuantity * k).toFixed(2);

console.log(`Plytų kiekis:${brickQuantity}`);
console.log(`Plytos kainuos ${price} Lt`);
