let arrNums = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10];
let evens = (num) => {
    let result = [];
    for (let i = 0; i < num.length; i++){
        if (num[i] % 2 === 1) {
            result.push(num[i]);
    }   
}
return result;     
    
}
console.log(evens(arrNums));
