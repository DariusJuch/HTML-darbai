let number = prompt("Write a number");

let myfunction = (num2) => {
    let result = []
    let sum = 0;
    for (let i = 0; i < num2; i++){
        if (i % 2 === 0) { 
            console.log(i);
             
            sum += i;
    }
}

result.push(sum);

return result;     
    
}
console.log(myfunction(number));
