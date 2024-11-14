/*
Write a JavaScript function to capitalize the first letter of each word in a string. 
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
*/
let capitalize_Words = (allFirst) => {
    let arr = allFirst.split(" ");
    let capitalize = arr.map((first) => first.charAt(0).toUpperCase() + first.slice(1)).join(" ");

    return capitalize;
}
console.log(capitalize_Words('js string exercises'));