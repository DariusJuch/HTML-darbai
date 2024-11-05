"use strict";

let birds = prompt("Įveskite paukščiu kieki atskirtus tarpu").split(" ")

let a = birds[0],
    b = birds[1],
    c = birds[2];

let birdsArr = [a, b, c];
birdsArr.forEach(function(row){
    console.log(row)
});

let max;
let min;

if (a > b && a > c) {
    max = a;
    console.log(max);
} else if (b > a && b > c) {
    max = b;
    console.log(max);
} else if (c > a && c > b) {
    max = c;
    console.log(max);
}
if (a < b && a < c) {
    min = a;
    console.log(min);
} else if (b < a && b < c) {
    min = b;
    console.log(min);
} else if (c < a && c < b) {
    min = c;
    console.log(min);
}
let result = max - min;
console.log(`Skirtumas tarp didžiausio ir mažiausio kiekio: $result`);