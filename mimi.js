// using arrow function
const temperature = () => {
//    declare a variable to store celsius temperature
  let celsius;
//   declare a constant fahrenheit temperature
const fahrenheit = 20
// convert the fahrenheit temperature to celsius
celsius = (fahrenheit - 32) * 5/9
// shows the output to the terminal
console.log('celsius =',celsius)
}
// invoke the function
temperature();

// using function declaration
function temperature2() {
let fahrenheit;
const celsius = 20;
fahrenheit = (celsius * 1.8) + 32;

console.log('fahrenheit =',fahrenheit)
}
temperature2();