let studentNames = ["Lokitha", "Bulegoda", "Manawadu"];
console.log("Student Names: ", studentNames);

console.log("\n=============================================\n");

// 01) push

//Add values to the end of array

studentNames.push("Dubai Kumaraya", "Dimuth");
console.log("Student Names after push: ", studentNames);

console.log("\n=============================================\n");

// 02) pop

// Remove last element from array and return it

let poppedName = studentNames.pop();
console.log("Popped name: ", poppedName);
console.log("Student Names after pop: ", studentNames);

console.log("\n=============================================\n");

// 03) shift

// Remove first element from array and return it

let shiftedName = studentNames.shift();
console.log("Shifted name: ", shiftedName);
console.log("Student Names after shift: ", studentNames);
console.log("0 index after shift: ", studentNames[0]);

console.log("\n=============================================\n");

// 04) unshift

// Set value as a first element in an array

studentNames.unshift("Kaluwa");
console.log("Student Names after unshift: ", studentNames);
console.log("0 index after unshift: ", studentNames[0]);

console.log("\n=============================================\n");

// 05) concat

// Join two arrays and return them as one

let maleNames = ["Bulegoda", "Manawadu"];
let femaleNames = ["Jessy", "Ema"];

let allStudents = maleNames.concat(femaleNames);
console.log(
  "Array after concat (without assigning to a variable): ",
  maleNames.concat(femaleNames)
);
console.log(
  "Array after concat (after assigning to a variable): ",
  allStudents
);

console.log("\n=============================================\n");

// 06) slice

// Create a new array by copying from providing index to the end of current array and return it
// Wont affect the current array

let fruits = ["Orange", "Avocado", "Grapes", "Water Mellon"];
let slicedFruitArray = fruits.slice(2);

console.log("Fruits array: ", fruits);
console.log("After fruits array slice from index 0: ", fruits.slice(0));
console.log("After fruits array slice from index 1: ", fruits.slice(1));
console.log("After fruits array slice from index 2: ", fruits.slice(2));
console.log(
  "After fruits array slice from index 2 (after assigning to a variable): ",
  slicedFruitArray
);
console.log("Fruits array: ", fruits);

console.log("\n=============================================\n");

// 07) splice

// cars.splice(where to point first, how much should remove from point, what replace removed elements);

let cars = ["Audi", "BMW", "Mustang", "Dodge"];

console.log("Cars array: ", cars);

cars.splice(1, 1, "Sky Line");

console.log("Cars array after splice: ", cars);

console.log("\n=============================================\n");

// 08) reverse

// Reverse the elements in array

let letters = ["a", "b", "c", "d"];
console.log("Letters array: ", letters);
console.log(
  "Letters array after reversed (without assigning to a variable): ",
  letters.reverse()
);
let reversedLetters = letters.reverse();
console.log(
  "Letters array after reversed (after assigning to a variable): ",
  reversedLetters
);

console.log("\n=============================================\n");

// 09) sort

let numbers = [5, 2, 1, 3, 4];
console.log("Numbers array: ", numbers);
numbers.sort();
console.log("Numbers array after sort: ", numbers);

// Make ascending array descending

console.log("Descending numbers array: ", numbers.reverse());

console.log("\n=============================================\n");

// Arrays can contain different type value types

let testingArray = ["Lokitha", "Bulegoda", "Manawadu", 100];
console.log("Testing array: ", testingArray);
