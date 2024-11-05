"use strict";

let h = +prompt("Iš kokio aukščio šoka parašiutininkas?");
let t = +prompt("Per kiek sekundžių išsiskleidžia jo parašiutas?");
const freeFallAcceleration = 9.8;

let result = Math.sqrt(2 * h / freeFallAcceleration) *0.5;

if (result >= t) {
    console.log("Parašiutas išsiskleis");
} else if (result < t) {
    console.log("Parašiutas neišsiskleis");
}