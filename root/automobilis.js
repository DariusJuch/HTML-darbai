"use strict";

let speed = +prompt("Koks automobilio greitis? ");
let distance = +prompt("Tunelio ilgis metrais")
let distanceKm = distance / 1000;
let willPass = distanceKm * speed;

console.log(`Automobilis tunelį pravažiuos per ${willPass} s`);