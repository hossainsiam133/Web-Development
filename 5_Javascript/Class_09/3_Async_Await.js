// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data")
//             // resolve(200)
//             reject("error")
//         }, 2000)
//     })

// }
// async function forecast() {
//     await api()
// }
function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", id)
            if (id == 4)
                reject("404")
            resolve("Solved")

        }, 2000)
    })
}

async function getAllData() {
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
}