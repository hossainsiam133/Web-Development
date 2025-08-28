let title = document.querySelector("h2");
title.innerText += " from Apna College";
// let para = document.querySelector("p").innerHTML = "<b>Hello Siam Hossain</b> This is Inner HTML"
// console.log()
let box = document.getElementsByClassName("box");
console.log(typeof box, box.length);
for (let i = 1; i <= box.length; i++) {
    box[i - 1].innerText += `This is Box ${i}`
    if (i & 1)
        box[i-1].innerHTML = "<b>" + `${box[i - 1].innerText}` + "<b>"
}