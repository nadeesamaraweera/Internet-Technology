//1.setTimeout -- executes a function once after a specific delay


//setTimeout(callback , 5000)

// setTimeout(function () { //use Anonymous  function
//      console.log("Hello........")
// } ,5000)

// setTimeout( () => {   // use arrow function
//     console.log("Hello........")
// } ,5000)


let timeout = setTimeout( () => {  
    console.log("Hello........")
} ,5000)

//cancel the  timeout
clearTimeout(timeout)

console.log("=====================")



//2.setInterval

//setInterval(callback , interval)

// setInterval(() => {
//     console.log("Hey")
// } , 5000);


let interval = setInterval(() => {
    console.log("Hey")
} , 5000);

//cancel the  timeout
clearInterval(interval)

console.log("=====================")

