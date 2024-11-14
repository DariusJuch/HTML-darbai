/*
 Write a JavaScript function to convert a string in abbreviated form. 
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/
let abbrev_name = (item) => {
    let arr = item.split(" ");
    let newArr = arr.map((name, index)=>{
        if (index > 0){
            return name[0] + ".";
        }
        return name
    })
    return newArr.join(" ");
}
console.log(abbrev_name("Robin Singh"));