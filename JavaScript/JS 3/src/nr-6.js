let firstValue = +prompt("Write Squer element number");
let secondValue = +prompt("Write Squer row number");

let myfunction = (width, height) => {
   let text = ""
    for (let i = 0; i < height; i++) {
        if ( i === 0 || i === height - 1){
            text += "*".repeat(width) + "\n";
        }else {
            text +="*" + " ".repeat(width - 2) + "*" + "\n"
        }

    }
    return text;
}
console.log(myfunction(firstValue, secondValue));