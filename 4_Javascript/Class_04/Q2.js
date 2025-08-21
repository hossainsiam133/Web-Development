let arr = [250, 645, 300, 900, 50];
for (let i in arr) {
    arr[i] = arr[i] - (arr[i] * (10 / 100));
}
console.log(arr)