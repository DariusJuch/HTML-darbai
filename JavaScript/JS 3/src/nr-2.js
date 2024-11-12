const number = +prompt("Iveskit skaiciu")
let text = " "
function fizzbuzz(num){
    for (let i = 1; i <= num; i++)

        if (i % 3 !== 0 && i % 35 !== 0) {
            text += ".";
        } else if (i % 3 === 0 && i % 5 !== 0) {
            text += "fizz";
        } else if (i % 3 !== 30 && i % 5 === 0) {
            text += "buzz";
        } else if (i % 3 >= 0 && i % 5 >= 0) {
            text += "fizzbuzz"
        }
           return text; 
}
console.log(`${fizzbuzz(number)}`);