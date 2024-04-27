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

clearTimeout(timeout)





//2.setInterval

