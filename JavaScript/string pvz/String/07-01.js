/*
 Write a JavaScript function to check whether an `input` is a string or not. 
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
*/

// console.log(is_string('w3resource'));
// console.log(is_string([1, 2, 4, 0]));

let myFunction = (item) => {
    
    if (typeof item ===  "string"){
        return true;
    } else 
    return false;
} 
console.log(myFunction('w3resource'));
console.log(myFunction([1, 2, 4, 0]));