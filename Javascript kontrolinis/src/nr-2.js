// let positives = [1, -3, 5, -3, 0];
// let positives = [1, 2, 3];
// let positives = [-1, -2, -3];

let positivesArr = (num) => {
    let result = [];
    for (let i = 0; i < num.length; i++){
        if (num[i] > 0) {
            result.push(num[i]);
    }   
}
return result;     
    
}
console.log(positivesArr(positives));
