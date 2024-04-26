// There are two types of data types

// 01. Primitive data types
// 02. Reference data types

// ================================================================================================================= //

// (01) String

let firstName = "Janindu";

console.log("Type of firstName : ", typeof firstName);

// (02) Number

let age = 20;
let distance = 3.25;

console.log("Type of age : ", typeof age);
console.log("Type of distance : ", typeof distance);

// (03) Boolean

let isAdded = true;

console.log("Type of isAdded : ", typeof isAdded);

// (04) Undefined

let address;

console.log("Type of address : ", typeof address);

let email = undefined;

console.log("Type of email : ", typeof email);

// (05) Null

let mobile = null;

console.log("Type of mobile : ", typeof mobile);

// (06) Symbol

let symbol = Symbol("First Name");

console.log("Type of symbol : ", typeof symbol);

// (07) BigInt

const number = 2293872985702457025728570387402834728347n;

const number2 = 100;

console.log("Type of number : ", typeof number);
//console.log(number + number2); //TypeError: Cannot mix BigInt and other types, use explicit conversions at Object
console.log(number + BigInt(number2));
