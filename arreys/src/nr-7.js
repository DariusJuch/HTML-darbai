// let anyPositive = [1, 2, 3, 4, 5];
// let anyPositive = [1, 2, -3, 4, 5];
// let anyPositive = [0, 0, 1,];
let anyPositive = [-10, -10, -10];

let myFunction = (num) => {
    for (let i = 0; i < num.length; i++){
        console.log(num[i]);
        
        if (num[i] > 0) {
            return true;
    }  
}
        return false;
    
}
console.log(myFunction(allPositive));
