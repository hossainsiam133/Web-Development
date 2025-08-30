// Q1
let body = document.querySelector("body")
let btn = document.createElement("button")
btn.innerText = "Click Me"
btn.style.backgroundColor = "red"
btn.style.color = "white"
body.prepend(btn)

// Q2
let div = document.querySelector("p")
let x = prompt("Enter a Number: ")
if (x & 1) {
    // div.setAttribute("class","graph")
    div.classList.add("graph")
    // div.classList.remove("graph")
}
else {
    // div.remove()
}