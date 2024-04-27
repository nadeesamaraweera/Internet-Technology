
let count = 1;

 let interval = setInterval(() =>{
    console.log(count)
    count++;
    if(count>10){
        clearInterval(interval)
    }
 } ,2000)