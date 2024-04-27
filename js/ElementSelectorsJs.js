// ID Selector

/** We can catch an element by its id using this. Its only returns only one value.
 * So if there was two elements with same id only the first element will be returns.
 * */

let calculateBtn = document.getElementById("btnCalculate");
console.log(calculateBtn);

calculateBtn.style.backgroundColor = "green";
calculateBtn.style.color = "white";


calculateBtn.addEventListener("click", () => alert("Hello"));

// Class Selector

let boxes = document.getElementsByClassName("box");
console.log(boxes);

// Tag Selector

let h1Tags = document.getElementsByTagName("h1");
console.log(h1Tags);


//Query selector

let button = document.querySelector("#btnCalculate")
console.log(button)

let testDiv = document.querySelector(".test-div")
console.log(testDiv)

let box = document.querySelector(".box")
console.log(box)

let b = document.querySelectorAll(".box")
console.log(b)

let bb =document.querySelector("#container .box")
console.log(bb)

// let bc =document.querySelector("#container .box")
// console.log(bc)

let bbb =document.querySelectorAll("#container .box")
console.log(bbb)