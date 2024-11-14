/*
Write a JavaScript function to remove specified number of characters from a string. 
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/
let truncate_string = (item, num) => {
    let name = item.slice(0, num )
    return name;

}

console.log(truncate_string("Robin Singh",4));