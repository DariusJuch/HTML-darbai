let number = [1, 4, 8];

let myFunction = (total, value) => {
    return total + value;
}
let sum = number.reduce(myFunction);

console.log(sum);
