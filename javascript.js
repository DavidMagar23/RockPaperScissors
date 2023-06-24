// Initialize data
let body = document.querySelector('#body');
    rock = document.getElementById('rock-choice'),
    paper = document.getElementById('paper-choice'),
    scissors = document.getElementById('scissors-choice'),
    playerChoice = '';

// Check for player's choice
rock.addEventListener("click", () => {
    playerChoice = 'rock';
    console.log(playerChoice)
})

paper.addEventListener("click", () => {
    playerChoice = 'paper';
    console.log(playerChoice)
})

scissors.addEventListener("click", () => {
    playerChoice = 'scissors';
    console.log(playerChoice)
})


