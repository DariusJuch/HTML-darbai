/*
Write a JavaScript function to capitalize the first letter of a string. 
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
*/
let capitalize = (first) => {
  return first.charAt(0).toUpperCase() + first.slice(1);
}
console.log(capitalize('js string exercises'));