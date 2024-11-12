let start = +prompt("Write a first number");
let end = +prompt("Write a last number");1

let myfunction = () => {
    let result = "";
    while (start <= end){
    result += start;
    if (start < end) {
        result += "_";
    }
    start ++;
}
return result;
}
console.log(`${myfunction()}`);