// let div = document.querySelector("div")
// let id = div.getAttribute("id")
// console.log(id)
// console.log(id.toUpperCase())
// // div.style.visibility = "hidden"

// let para = document.querySelector("p")
// para.setAttribute("class", "New_Class")
// console.log(para)
// para.style.backgroundColor = "red"
// para.style.fontSize = "20px"
// para.innerText = "Hello Siam Hossain"

let div = document.querySelector("div")
let btn = document.createElement("button")
btn.innerText = "Click"
// div.append(btn)
// div.prepend(btn)
// div.before(btn)
div.after(btn)

let heading = document.createElement("h1")
heading.innerText = "Welcome in JS"
heading.style.color = "blue"
heading.style.textAlign = "center"
heading.style.fontSize = "50px"
document.querySelector("body").prepend(heading)