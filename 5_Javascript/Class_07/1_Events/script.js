let btn = document.getElementById("btn2")
btn.onclick = (e) => {
    console.log("This is Events in JS", `\nType: ${e.type}`)
    // console.log(e.type,e.target,e.clientX,e.clientY)
}
let div1 = document.getElementById("box1")
div1.onmouseover = (e) => {
    console.log("This is Box", `\nType: ${e.type}`)
    div1.style.background = 'red'
}
// Overlapping and execute last block of code
// div1.onmouseover = (e) => {
//     console.log("This is Box",`\nType: ${e.type}`)
//     div1.style.background = 'blue'
// }
let div2 = document.getElementById("box2")
div2.addEventListener("mouseover", (e) => {
    console.log("This is Event Listener 1")
})
div2.addEventListener("mouseover", (e) => {
    console.log("This is Event Listener 2 and overlapped")
})