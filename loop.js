// // forEach is a method available in JavaScript that allows you to loop through elements of an array and perform a function on each element.
// // const numbers = [1, 2, 3, 4, 5];

// // numbers.forEach(function(number) {
//     // Outputting Data: When you want to output each element of an array, such as rendering a list of items in a user interface.
// //     console.log(number);
// // });
// // forEach is a simple and convenient way to loop through elements of an array and perform operations on each element. It's easy to understand and widely used in JavaScript programming for various tasks involving array manipulation and data processing.



// // A for loop in JavaScript is a control flow statement that allows you to execute a block of code repeatedly. It has three main parts:

// /*Initialization: This part initializes the loop variable(s) and is executed before the loop starts.
// Condition: This part defines the condition for continuing the loop. The loop will continue to execute as long as this condition evaluates to true.
// Update: This part updates the loop variable(s) after each iteration.*/

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// // Generating Sequences: When you need to generate a sequence of numbers or characters and perform an operation on each item in the sequence.
// // for (let i = 0; i <= 10; i += 2) {
// //     console.log('sequence:',i);
// // }

// // const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// // let text = "";
// // for (let i = 0; i < cars.length; i++) {
// //     text += cars;
// //     console.log('cars:',i)
// //   }

const fruits = ['apple', 'banana', 'orange','pawpaw','gauva','pear','lemon','sherri'];
for (let i = 0; i < fruits.length; i+=3) {
    console.log('list of fruits:',fruits[i]);
    console.log(fruits.length)
}