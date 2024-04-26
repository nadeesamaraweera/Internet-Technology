let addedValue = addValue(1, 2);
console.log("Add: ", addedValue);

let subbedValue = subValue(2, 1);
console.log("Sub: ", subbedValue);

let multipliedValue = multiplyValue(5, 1);
console.log("Multiply: ", multipliedValue);

let dividedValue = divideValue(20, 2);
console.log("Divided: ", dividedValue);

function addValue(firstValue, secondValue) {
  return firstValue + secondValue;
}

function subValue(firstValue, secondValue) {
  return firstValue - secondValue;
}

function multiplyValue(firstValue, secondValue) {
  return firstValue * secondValue;
}

function divideValue(firstValue, secondValue) {
  return firstValue / secondValue;
}

//===========================================

let addString = addValue(1, "hi");
console.log("When we add number and string: ", addString); //When we add number and string:  1hi
console.log("Type of addString: ", typeof addString);

let subString = subValue(2, "hi");
console.log("When we sub number and string: ", subString); //When we sub number and string:  NaN
console.log("Type of subString: ", typeof subString);

let mulString = multiplyValue(5, "hi");
console.log("When we sub number and string: ", subString); //When we sub number and string:  NaN
console.log("Type of mulString: ", typeof mulString);

let divString = divideValue(20, "hi");
console.log("When we sub number and string: ", subString); //When we sub number and string:  NaN
console.log("Type of divString: ", typeof divString);

// * NaN :- Not a Number
