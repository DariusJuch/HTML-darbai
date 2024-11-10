let positivesArr = [10, -5, 2, 4, -10, -10];
let positives = (num) => {
    let result = [];
    for (let i = 0; i < num.length; i++){
        if (num[i] > 0) {
            result.push(num[i]);
    }   
}
return result;     
    
}
console.log(positives(positivesArr));
