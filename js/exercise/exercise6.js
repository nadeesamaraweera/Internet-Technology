document.getElementById('numberInput').addEventListener('keydown', function (event) {
  console.log(event.keyCode)
    
    if(event.keyCode >= 48 && event.keyCode <= 57 ){


    }else{
        event.preventDefault()
        alert("Invalid")
        }
       
})