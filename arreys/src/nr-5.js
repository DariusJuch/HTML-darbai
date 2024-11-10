// let allPositive = [1, 2, 3, 4, 5];
// let allPositive = [1, 2, -3, 4, 5];
let allPositive = [0, 0, 1,];

let myFunction = (num) => {
    for (let i = 0; i < num.length; i++){
        console.log(num[i]);
        
        if (num[i] <= 0) {
            return false;
    }  
}
        return true;
    
}
console.log(myFunction(allPositive));
