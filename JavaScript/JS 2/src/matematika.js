"use strict";

let grade =  prompt("Įveskite 5 pažimus atskirtus kableliais");

let gradeArr = grade.split(",");
let result = ((+gradeArr[0] + +gradeArr[1] + +gradeArr[2] + +gradeArr[3] + +gradeArr[4]) / 5);

if (result > 9) {
    console.log(`Petriukas gaus tris saldainius`);
} else if ( result > 7 && result < 9) {
    console.log(`Petriukas gaus du saldainius`);
} else if (result < 7) {
    console.log(`Petriukas gaus vieną saldainį`);
}
    
