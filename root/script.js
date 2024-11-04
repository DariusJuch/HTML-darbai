"use strict";


let pirmadenis = +prompt (" Kiek pamokų yra pirmadienį? ");
let antradenis = +prompt ("Kiek pamokų yra antradienį? ");
let treciadenis = +prompt ("Kiek pamokų yra trečiadienį? ");
let ketvirtadenis = +prompt ("Kiek pamokų yra ketvirtadienį? ");
let penktadenis = +prompt ("Kiek pamokų yra penktadienį? ");
let pamokosTrukme = 45;
let totalLeson = pirmadenis + antradenis + treciadenis + ketvirtadenis + penktadenis;
let minTotal = totalLeson * pamokosTrukme;
console.log(totalLeson);
console.log( minTotal );