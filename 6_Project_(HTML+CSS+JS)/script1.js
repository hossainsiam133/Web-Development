let userScore = 0
let compScore = 0

randoms = () => {
    const array = ["rock", "paper", "scissor"]
    const ind = Math.floor(Math.random() * 3)
    return array[ind]
}
getResult = (user, computer) => {
    if (user === computer) return 'draw';
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) return 'win';
    return 'lose';
}
playGame = (userChoise) => {
    compChoise = randoms()
    const result = getResult(userChoise, compChoise)
    console.log(result)
    if (result === "win")
        userScore += 1
    else if (result === "lose")
        compScore += 1
    const uid = document.getElementById("user-score")
    console.log(uid)
    uid.textContent = `You: ${userScore}`
    const cid = document.getElementById("computer-score")
    cid.textContent = `Computer: ${compScore}`

    const resultSpan = document.getElementById("result")
    if (result === "draw")
        resultSpan.textContent = `You choose ${userChoise}, Computer choose ${compChoise} and it is Draw`;
    else
            resultSpan.textContent = `You choose ${userChoise}, Computer choose ${compChoise} and User ${result}`;


}
const choices = document.querySelectorAll(".choice-btn")
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoise = choice.getAttribute("id")
        // console.log(userChoise)
        playGame(userChoise)
    })
})