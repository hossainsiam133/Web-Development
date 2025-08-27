let n = prompt("Enter N: ")
let arr = []
for (let i = 0; i < n; i++) {
    let x = prompt()
    arr.push(x - '0')
}
let sum = arr.reduce((acc, val) =>
    acc + val, 0
)
console.log(sum)