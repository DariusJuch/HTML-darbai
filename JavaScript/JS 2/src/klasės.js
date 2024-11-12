"use strict";

let gradeClassAvg = prompt("Įveskite klasiu avg pažimus atskirtus tarpu").split(" ")

let a = gradeClassAvg[0],
    b = gradeClassAvg[1],
    c = gradeClassAvg[2],
    d = gradeClassAvg[3];
    

if (a > b && a > c && a > d) {
    console.log("Didžiausias vidurkis:" + a);
    console.log("Kitų klasių vidurkiai skiriasi:" + (a - b) + ", " + (a - c) +", " + (a - d)); 
} else if (b > a && b > c && b > d) {
    console.log("Didžiausias vidurkis:" + b);
    console.log("Kitų klasių vidurkiai skiriasi:" + (b - a ) + ", " + (b - c) +", " + (b - d));
} else if (c > a && c > b && c > d) {
    console.log("Didžiausias vidurkis:" + c);
    console.log("Kitų klasių vidurkiai skiriasi:" + (c - a ) + ", " + (c - b) +", " + (c - d));
} else if (d > a && d > b && d > c) {
    console.log("Didžiausias vidurkis:" + d);
    console.log("Kitų klasių vidurkiai skiriasi:" + (d - a ) + ", " + (d - b) +", " + (d - c));
} 

