let fruits = [];

console.log("Type of fruits : ", typeof fruits);
console.log("Fruits array : ", fruits);
console.log("Fruits array length : ", fruits.length);

fruits = ["apple", "orange", "pineapple"];

console.log("Type of fruits : ", typeof fruits);
console.log("Fruits array : ", fruits);
console.log("Fruits array length : ", fruits.length);

console.log("Second element : ", fruits[1]);
console.log("Third element : ", fruits[2]);
console.log("First element : ", fruits[0]);

// Not illegal
console.log("Fourth element : ", fruits[3]);

fruits[1] = "Banana";

console.log("Fruits array : ", fruits);

// We can add element even there are empty elements between
fruits[5] = "Grapes";

console.log("Fruits array : ", fruits);

console.log("Fourth element : ", fruits[3]);
console.log("Fifth element : ", fruits[4]);
