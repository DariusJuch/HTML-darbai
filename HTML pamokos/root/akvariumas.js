"use strict";
let fish = +prompt ("Kiek žuvų gyvena akvariume? ")
let addFish = +prompt ("Kiek žuvų į akvariumą įdedama kiekvieną dieną? ")
let days = +prompt ("Kiek dienų praėjo? ")
let totalFish = (days * addFish) + fish;
console.log(`po ${days} dienų akvariume gyvens ${totalFish} žuvų.`)