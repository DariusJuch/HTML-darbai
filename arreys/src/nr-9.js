let number = [5, 20, 4, 50, 24, 2, 4];

let mean = (total, value) => {
    return total + value;

}
let sum = number.reduce(mean) / number.length;

console.log(sum);
