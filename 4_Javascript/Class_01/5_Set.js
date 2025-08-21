let arr = [1, 2, 3, 2, 1, 2, 3, 2, 3, 4]
let st = new Set(arr)
console.log(st)
for(let x of st)
{
    console.log(x)
}