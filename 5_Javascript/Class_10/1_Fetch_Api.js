const url = "https://dogapi.dog/api/v2/breeds"
async function getData() {
    // console.log("Getting data...")
    let response = await fetch(url)
    let data_api = await response.json()
    const rand = Math.floor(Math.random() * 10)
    return data_api.data[rand].attributes
    // console.log(data_api.data[0].attributes)
}
// {name: 'Affenpinscher', description: 'The Affenpinscher is a small and playful breed of … affectionate, and make excellent companion dogs.', 
// life: {…}, male_weight: {…}, female_weight: {…}, …}
let buttons = document.getElementById("butt")
buttons.onclick = async () => {
    const names = document.getElementById("h1")
    const des = document.getElementById("p")
    const life = document.getElementById("life")
    const mw = document.getElementById("mw")
    const fw = document.getElementById("fw")
    const data = await getData()
    // console.log(data)
    names.innerText = "Name: " + data.name
    des.innerText = "Description: " + data.description
    life.innerText = "Life: " + data.life.min + " to " + data.life.max
    mw.innerText = "Male Weight: " + data.male_weight.min + " to " + data.male_weight.max
    fw.innerText = "Female_weight: " + data.female_weight.min + " to " + data.female_weight.max
}