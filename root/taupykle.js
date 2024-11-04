"use strict";
let fiveCt = +prompt("Kiek yra monetų po 5 ct? ");
let twentyCt = +prompt("Kiek yra monetų po 20 ct? ");
let twoLt = +prompt("Kiek yra monetų po 2 Lt? ");
let saver = (fiveCt * 5 + twentyCt * 20 + twoLt * 200) / 100;

console.log(`Taupyklėje yra ${saver} Lt`);