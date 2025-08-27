let arr = [10, 2, 6, 4, 7]
let mx = arr.reduce((acc, val) =>
    val > acc ? val : acc, arr[0]
)
console.log(mx)