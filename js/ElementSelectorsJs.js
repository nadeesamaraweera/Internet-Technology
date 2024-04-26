// ID Selector

/** We can catch an element by its id using this. Its only returns only one value.
 * So if there was two elements with same id only the first element will be returns.
 * */

let calculateBtn = document.getElementById("btnCalculate");
console.log(calculateBtn);

calculateBtn.style.backgroundColor = "black";
calculateBtn.style.border = 0;

calculateBtn.addEventListener("click", () => alert("Hello"));

// Class Selector

let boxes = document.getElementsByClassName("box");
console.log(boxes);

// Tag Selector

let h1Tags = document.getElementsByTagName("h1");
console.log(h1Tags);
