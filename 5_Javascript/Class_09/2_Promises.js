// let promise = new Promise((resolve, reject) => {
//     console.log("Promised")
//     resolve("Done")
// })

function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", id)
            resolve("Solved")
            // reject(404)
        }, 3000)
    })
}
let pro = getData(1)
// pro.then((res) => {
//     console.log("Step 1 is done", res)
//     let pro = getData(2)
//     pro.then(() => {
//         console.log("Step 2 is done", res)
//     })
// }) 
// Alternative: Promise Chain
getData(1)
    .then((res) => {
        console.log("Step 1 is done", res)
        return getData(2)
    })
    .then((res) => {
        console.log("Step 2 is done", res)
    })
    .catch((error) => {
        console.log("Error", error)
    })

pro.catch((error) => {
    console.log("Error", error)
})
