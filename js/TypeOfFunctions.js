// 01) Named Functions

function addNumber(num1, num2) {
  return num1 + num2;
}
console.log(addNumber(10, 20));

console.log("===============");

// 02) Anonymous Function

let multiplyNumber = function (num1, num2) {
  return num1 * num2;
};
console.log(multiplyNumber(10, 20));

console.log("===============");

// 03) Arrow Functions

// let subNumber = function (num1, num2) {
//   return num1 - num2;
// };
// console.log(subNumber(20, 10));

let subNumber = (num1, num2) => num1 - num2;
console.log(subNumber(20, 10));

console.log("===============");

// 04) Constructor Function

function Student(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}
let student = new Student("Kamal", 18, "lokitha@gmail.com");
console.log(student);

console.log("===============");

// 05) Callback Function

// We can pass another function as a function parameter.

function myFunction(callback) {
  if (typeof callback === "function") {
    callback();
  } else {
    console.log(callback);
  }
}

let person = {
  name: "Kamal",
  age: 20,
};

function secondFunction() {
  console.log("Hello");
}

myFunction(person);
myFunction(secondFunction); // When passing a function as a parameter, we do not put () to end of the argument function.

console.log("===============");

// 06) Recursive Function

function factorial(n) {
  if (n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));
