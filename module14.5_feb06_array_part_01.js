// To put multiple things in one thing is called array
// Collects  under a single variable name

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const guest = ["hakim bhai", "ratul bhai", "akash bhai", "sompod"];

console.log(guest[3]);

// Array is mutable -> you can change array index value after declaration
guest[3] = "Sabuj Sarker";
console.log(guest);

const len = numbers.length;
console.log(len);

guest.push("Rafid", "mejba", "tanvir");
console.log(guest);

const popped = guest.pop(); // Returns the popped element
console.log(guest);

guest.unshift("Fakhrul Islam"); // Push an element on the start of an array
console.log(guest);

const shifted = guest.shift();
console.log(guest);
