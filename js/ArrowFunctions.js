function addNumbers(num1, num2) {
  return num1 + num2;
}

// Arrow function with parameter

let addNumbersArrowFunc = (num1, num2) => {
  return num1 + num2;
};
// let addNumbersArrowFunc = (num1, num2) => num1 + num2;

// Arrow function without parameter

const sayHello = () => "Hello World !";

// console.log(addNumbers(10, 20));
// console.log(addNumbersArrowFunc(10, 20));
// console.log(sayHello());

// ========================================================================

// 01. Converting Named Function to Arrow Function

// function addNumber(num1, num2) {
//   return num1 + num2;
// }
// console.log(addNumber(10, 20));

const addNumber = (num1, num2) => num1 + num2;
console.log(addNumber(10, 20));

console.log("===================");

// 02. Converting Anonymous Function to Arrow Function

// let multiplyNumber = function (num1, num2) {
//   return num1 * num2;
// };
// console.log(multiplyNumber(10, 20));

let multiplyNumber = (num1, num2) => num1 * num2;
console.log(multiplyNumber(10, 20));

console.log("===================");

// 03. Converting Constructor Function to Arrow Function

// We can syntax wise convert a constructor function to a arrow function. But it wont function as it should.
//Because 'this, 'new' keywords does not support when using arrow function.

// function Student(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
// }
// let student = new Student("Kamal", 18, "lokitha@gmail.com");
// console.log(student);

let Student = (name, age, email) => {
  this.name = name;
  this.age = age;
  this.email = email;
};
// let student = new Student("Kamal", 18, "lokitha@gmail.com"); //TypeError: Student is not a constructor
// console.log(student);

console.log("===================");

// 04. Converting Callback Function to Arrow Function

// function myFunction(callback) {
//   if (typeof callback === "function") {
//     callback();
//   } else {
//     console.log(callback);
//   }
// }
// function secondFunction() {
//   console.log("Hello");
// }
// myFunction(secondFunction);

let myFunction = (callback) => {
  if (typeof callback === "function") {
    callback();
  } else {
    console.log(callback);
  }
};
let secondFunction = () => {
  console.log("Hello");
};
myFunction(secondFunction);

/*** If there is only one parameter we don;t have to use brackets let myFunction = (callback) => { ***/
