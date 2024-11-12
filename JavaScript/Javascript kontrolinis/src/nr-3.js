// let answer = +prompt("Iveskit skaiciu");
let sum = 0;
let myFunction = (sum) => {
    // let sum = 0;
    while (true) {
        let answer = +prompt("Iveskit skaiciu");
        // let sum = 0;
        if (answer > 0){
            sum += +answer;
        } else if (answer < 0){
            console.log("programa baigta")
            break;
        }
       
    }
    return sum;
}
console.log(myFunction(sum));
