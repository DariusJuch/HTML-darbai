let number = [-10, 10];

let myFunction = (total, value) => { 
    console.log(value);
    
    return total * value;
}
let sum = number.reduce(myFunction);

console.log(sum);
