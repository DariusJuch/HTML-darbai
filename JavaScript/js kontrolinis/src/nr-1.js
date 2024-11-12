
let myfunction = (num1, num2) => {
    let result = []
    let total = 0;
    let totalSecond = 0;
    for (let i = num1; i <= num2; i++){
        if (i % 2 === 1) {
            total += i;
    } else{
        totalSecond += i;
    }

}
result.push(total);
result.push(totalSecond);

return result;     
    
}
console.log(myfunction(0, 100));
