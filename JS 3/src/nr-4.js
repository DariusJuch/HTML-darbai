let factorNumber = +prompt("Write a first factor number");

// let numberArr = [];

let myfunction = (num1) => {
    let numberArr = [];
    for( i = 1; i <= num1; i ++){
        if ( num1 % i === 0 ){
            numberArr.push(i);
        } 

    }
     return numberArr;
}
console.log(myfunction(factorNumber));
