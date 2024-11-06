"use strict";

const variantas = +prompt("iveskit varianta");
const a = +prompt("iveskit a reiksme");
const b = +prompt("iveskit b reiksme");
let x;

if (variantas == 1) {
    x = a * b + 3;
    console.log(`Atsakimas x = ${x}`);
} else if (variantas == 2) {
    x = a + b;
    console.log(`Atsakimas x = ${x}`);
} else if (variantas == 3) {
    x = a - b;
    console.log(`Atsakimas x = ${x}`);
}