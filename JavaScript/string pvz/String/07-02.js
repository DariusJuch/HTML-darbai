/*
Write a JavaScript function to check whether a string is blank or not. 
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
Click me to see the solution
*/

let is_Blank = (blank) => {
    if (blank.length === 0){
        return true;
    } else 
    return false;
        
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));