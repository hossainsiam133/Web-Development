let mp = new Map();
let arr = [1, 2, 1, 2, 1, 3, 4, 2]
for (let x of arr) {
    mp.set(x, 0)
}
for (let i = 0; i < arr.length; i++) {
    mp.set(arr[i], mp.get(arr[i]) + 1)
}
for (let [key, value] of mp) {
    console.log(key, value)
}
let maps = arr.map(x => {
    return x * 2;
}
)
console.log(maps)