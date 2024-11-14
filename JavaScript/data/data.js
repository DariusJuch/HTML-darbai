let darius = new Date("1999-10-10");
let povilas = new Date("1999-01-04");

let getMonth = (dateString) => {
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
 const mano = new Date(dateString);
return months[mano.getMonth()];
}
console.log(getMonth(darius));

const hour = new Date();
hour.setHours(8)
console.log(hour);
