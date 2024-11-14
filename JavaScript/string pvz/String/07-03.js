/*
Write a JavaScript function to split a string and convert it into an array of words. 
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
Click me to see the solution
*/
let string_to_array = (item) =>{
    let arr =  item.split(" ")
    return arr;
}

console.log(string_to_array("Robin Singh"));