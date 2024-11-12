let makeSquer = +prompt("Write Squer number");

let myfunction = (num1) => {
   let text = ""
    for (let i =0; i < num1; i++) {
        for (let j = 0; j < num1; j++){
            text += "*";
            if ( i === 1){
                
            }
        }
        text += "\n"
    }
    return text;
}
console.log(myfunction(makeSquer));