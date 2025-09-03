const choices = ['rock', 'paper', 'scissors'];
const emojis = { rock: '✊', paper: '✋', scissors: '✌️' };
let userScore = 0, computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');
const historyDiv = document.getElementById('history');
const resetBtn = document.getElementById('reset');
let history = [];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getResult(user, computer) {
    if (user === computer) return 'draw';
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) return 'win';
    return 'lose';
}

function updateScore() {
    userScoreSpan.textContent = `You: ${userScore}`;
    computerScoreSpan.textContent = `Computer: ${computerScore}`;
}

function updateHistory(user, computer, outcome) {
    const outcomeText = outcome === 'win' ? 'You win!' : outcome === 'lose' ? 'You lose!' : "It's a draw!";
    history.unshift(
        `You: ${emojis[user]} vs Computer: ${emojis[computer]} — <b>${outcomeText}</b>`
    );
    if (history.length > 5) history.pop();
    historyDiv.innerHTML = history.join('<br>');
}

document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const userChoice = btn.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const outcome = getResult(userChoice, computerChoice);

        if (outcome === 'win') userScore++;
        else if (outcome === 'lose') computerScore++;

        updateScore();
        const outcomeText = outcome === 'win' ? 'You win!' : outcome === 'lose' ? 'You lose!' : "It's a draw!";
        resultDiv.textContent = `You chose ${emojis[userChoice]}, Computer chose ${emojis[computerChoice]}. ${outcomeText}`;
        updateHistory(userChoice, computerChoice, outcome);
    });
});

resetBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    history = [];
    updateScore();
    resultDiv.textContent = '';
    historyDiv.innerHTML = '';
});