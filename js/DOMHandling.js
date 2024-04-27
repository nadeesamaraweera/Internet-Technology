let box =document.getElementById("box")
console.log(box)

//1.innerHtml  

 //i
console.log(box.innerHTML)
console.log(typeof box.innerHTML)


//ii
// box.innerHTML ="Hello world"
// console.log(typeof box.innerHTML)

box.innerHTML ="<span>abcdef</span>"
console.log(box.innerHTML)


//2.textContent
console.log(box.textContent)
box.textContent = "Kamal Perera"
console.log(box.textContent)

//3.innerText - same as textContent But , innerText show as DOM return while textContent shows only the textual cntent
console.log(box.innerText)
box.innerText = "Nimal Silva"
console.log(box.innerText)


//4.Applying styles

let img = document.getElementById("image")
img.style.width = '200px'
img.style.height = '200px'
img.style.marginTop = '20px'

//5.setAttribute

img.setAttribute('src' , '/assets/images/puppy img.jpg')


// 6.classList
console.log (box.classList)
box.classList.add ('aaa' , 'bbb' , 'ccc')
console.log(box.classList)


box.classList.remove('ccc')
console.log(box.classList)

box.classList.replace('aaa' ,'nnn')

//7.append & appendChild
let parentDiv = document.createElement('div')
box.append(parentDiv)

let childDiv = document.createElement('div')
childDiv.setAttribute('astr' , 'new')
parentDiv.appendChild(childDiv)

//8.remove & removeChild
parentDiv.removeChild(childDiv)
parentDiv.remove()

