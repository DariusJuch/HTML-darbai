let a = +prompt("Iveskit a");
let b = +prompt("Iveskit b");


let numberJoinerFor = (num1, num2) => {
    text =""
    for ( i = num1; i <= num2; i++) {
        text += i;
        if ( i < num2){
            text += "_"
        }
 
    }
    return text;
}
console.log(`${numberJoinerFor(a, b)}`);