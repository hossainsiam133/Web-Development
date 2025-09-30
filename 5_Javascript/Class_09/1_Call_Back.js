// Basic
    function getData(id, next) {
        setTimeout(() => {
            console.log("Data:", id)
            if (next)
                next()
        }, 2000)
    }
    // console.log(1)
    // getData(2)
    // console.log(3)

// calback
    // function fetchData(callback) {
    //     console.log("Fetching data...");
    //     setTimeout(() => {
    //         callback("Data received!");
    //     }, 2000);
    // }
    // fetchData((result) => {
    //     console.log(result);
    // });

// callback hell 
    // getData(1, () => {
    //     getData(2, () => {
    //         getData(3)
    //     })
    // })
// to solve the efficiency issues promises are used
