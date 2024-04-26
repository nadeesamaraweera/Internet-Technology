// let :- block-scoped
// var :- function-scoped
// const :- block-scoped

// *** If we create a global variable using var it can be access through window object in from browser. But if you use let it can not be access through window object.

// iterateLetNumber();
// iterateVarNumber();
// iterateConstNumber();
iterateNumber()

// 01) let tool

function iterateLetNumber() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
  console.log(i); //ReferenceError: i is not defined
}

function iterateNumber() {
  let b = 100;

  for (let i = 0; i <= 5; i++) {
    console.log(b);
  }
}

function iterateVarNumber() {
  for (var i = 0; i <= 5; i++) {
    console.log(i);
  }
  console.log(i);
  //0
  //1
  //2
  //3
  //4
  //5
  //6
}

function iterateConstNumber() {
  for (const i = 0; i <= 5; i++) {
    console.log(i);
  }
  console.log(i); //TypeError: Assignment to constant variable.
}
