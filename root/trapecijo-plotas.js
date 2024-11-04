"use strict";

let a = +prompt("Trapecijos ilgesniojo pagrindo ilgis:");
let b = +prompt("Trapecijos trumpesniojo pagrindo ilgis:");
let h = +prompt("Trapecijos aukštinės ilgis:")
let trapeziumArea = (a + b) / 2 * h;

console.log(`Trapecijos plotas: ${trapeziumArea}`);