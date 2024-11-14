/*
Write a JavaScript function to hide email addresses to protect from unauthorized user. 
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/
let protect_email = (email) => {
const protectEmail = email.replace(/(\w{5})[\w.-]+@([\w.]+\w)/, "$1***@$2")
return protectEmail;
}
console.log(protect_email("robin_singh@example.com"));