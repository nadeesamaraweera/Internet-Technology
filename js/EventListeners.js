
//1.click event
document.getElementById('btnAdd').addEventListener('click',() => {
// console.log('Added to Cart')

alert("Added to cart....")

})

//2.mouseover event

let overColor = document.getElementById('box')

overColor.addEventListener('mouseover' ,() =>{
    console.log('mouse over....')
    overColor.style.backgroundColor = "red"
    
})

//3.mouseout event

let outColor = document.getElementById('box')

outColor.addEventListener('mouseout' ,() =>{
    console.log('mouse out....')
    outColor.style.backgroundColor="green"
 
})

//4.keydown event
let userNameField = document.getElementById('username')
userNameField.addEventListener('keydown' , (event) => {
    console.log('key ......' + event.key)
    console.log('key down......' + event.key)
    console.log('key Code.......' + event.keyCode)

})

//5.keyup event

userNameField.addEventListener('keyup' , (event) => {
    console.log('key up......' + event.key)
})

//6.submit event
document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("Form submitted")
})