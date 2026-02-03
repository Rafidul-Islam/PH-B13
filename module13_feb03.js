// console.log(33);

// Math Needed
// 1. Number
// 2. Integer
// 3. float
// 4. Operation
// 5. More Operation
// 6. Percentage
// 7. Sum
// 8. Average

// Variable
// var name1 = "rafid";
// console.log("Hello " + name1);

// let name2 = "rafid";
// console.log("Hello " + name2);

// const name = "rafid";
// console.log("Hello " + name);
// Can change and reassign var and let variables, but can't do it for constants

// Data types - Though js is a dynamic language
// let age = 22;
// let bankBalance = 23.345;
// let name = "rafid";
// let isEmploayable = false;
// console.log(name, age, bankBalance, isEmploayable);
// console.log(typeof isEmploayable);

// let false = true; // Wrong
// let is happy = false; //Wrong
// let "address" = "dhaka"; // Wrong
// let 3money = 100; //Wrong

// let $MakeMoney = true; // Right

// let my current home address = "mirpur"; // Wrong case
// let MyCurrentHomeAddress = "mirpur";    // Pascal Case
// let my_current_home_address = "mirpur"; // Snake Case
// let myCurrentHomeAddress = "mirpur";    // Camel case

// Keywords That i already know

// let number = "22";
// console.log(parseInt(number));

// let a = 10;
// let b = 30;
// a += b;

// console.log(a);
// console.log(b / a);
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", (name) => {
  console.log("Hello " + name);
  rl.close();
});
