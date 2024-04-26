sayHello(); //Hello World !

console.log("\n=========================================\n");

greeting("Lokitha"); //Good Morning Lokitha  !

console.log("\n=========================================\n");

// calling a function without passing parameter

greeting(); //Good Morning undefined  !

console.log("\n=========================================\n");

// calling a function with more parameters

greeting("Lokitha", "Janindu"); //Good Morning Lokitha  !

console.log("\n=========================================\n");

// We can pass any type of value to the parameter because there isnt any type safety is java script

greeting(1, 2); //Good Morning 1  !

console.log("\n=========================================\n");

// calling a function that have a return type

let printedValue = print("Lokitha");
console.log("Printed value: ", printedValue);

// trying to assign a value to a variable with a function that does not have a return type

let returningValue = sayHello();
console.log("Returned value: ", returningValue);

// ========== Functions ==========

// Basic function declaration without parameters

function sayHello() {
  console.log("Hello World !");
}

// Basic function declaration with parameters

function greeting(name) {
  console.log("Good Morning", name, " !");
}

// Function with return value

function print(value) {
  console.log("Printed: ", value);
  return "Printed: ", value;
}
