// Define a object in JavaScript

let student = {};

console.log("Student : ", student);
console.log("Type of student : ", typeof student);

student = {
  firstName: "Janindu",
  lastName: "Lokitha",
  age: 20,
  isRegistered: false,
};

console.log("Student : ", student);
console.log("Type of student : ", typeof student);

// Retrieve value using dot notation

console.log("Student age : ", student.age);

// Retrieve value using square bracket notation

console.log("Student age : ", student["age"]);

// Change value inside an object using dot notation or square bracket notation

student.age = 30;
console.log("Student age : ", student.age);

student["age"] = 30;
console.log("Student age : ", student["age"]);

console.log("Student : ", student);


console.log("=======================")

let person ={
  name:"Kamal",
  age: 40,
  phonenumber: "0754534345",

  greet: () =>{
    console.log("hey")
  }

  }
  console.log(person.greet())

  console.log("=======================")

  // literating over properties

  for(let Key in person){
    console.log(Key +  " : " + person[Key])
  }

  console.log(person.age)
 




