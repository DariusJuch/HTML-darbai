/*
Write a JavaScript function to parameterize a string. 
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
*/
let string_parameterize = (parametrize) => [
    result = parametrize.toLowerCase().replace(" ", "-") 
]
console.log(string_parameterize("Robin Singh from USA."));