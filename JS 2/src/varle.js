"use strict";

let m = +prompt("Kiek sveria varlė?");
let n = +prompt("Kiek varlių norima stebėti? ");
const maxWeight = 5;
let result = m * n / 1000;

if (result > maxWeight) {
    console.log(`Varlių stebėjimui pakanka`);
} else if (result < maxWeight) {
    console.log(`Varlių stebėjimui per mažai`);
}