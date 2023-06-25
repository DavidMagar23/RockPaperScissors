// Initialize data
let body = document.querySelector('#body');
    rock = document.getElementById('rock-choice'),
    paper = document.getElementById('paper-choice'),
    scissors = document.getElementById('scissors-choice'),
    playerScoreText = document.getElementById('player-score-text'),
    computerScoreText = document.getElementById('computer-score-text'),
    playerPlayText = document.getElementById('player-play-text'),
    computerPlayText = document.getElementById('computer-play-text'),
    gameText = document.getElementById('game-text'),
    music = document.getElementById('music'),
    winMusic = document.getElementById('win-music'),
    loseMusic = document.getElementById('lose-music'),
    tieMusic = document.getElementById('tie-music'),
    totalWin = document.getElementById('total-win'),
    totalLose = document.getElementById('total-lose'),
    totalTie = document.getElementById('total-tie'),
    rockImage = document.getElementById('rock'),
    paperImage = document.getElementById('paper'),
    scissorsImage = document.getElementById('scissors'),

    playerChoice = '',
    computerChoice = '',
    playerScore = 0,
    computerScore = 0,
    playerTotalScore = 0,
    computerTotalScore = 0;
    gameCount = 0;


// Play background music
body.addEventListener("click", (e) => {
    playMusic();
}
);

// Audio 
function playWin () {
    winMusic.volume = "0.3";
    winMusic.play();
}

function playLose () {
    loseMusic.volume = "0.2";
    loseMusic.play();
}

function playTie () {
    tieMusic.volume = "0.3";
    tieMusic.play();
}


function playTotalWin () {
    totalWin.volume = "0.3";
    totalWin.play();
}

function playTotalLose () {
    totalLose.volume = "0.3";
    totalLose.play();
}

function playTotalTie () {
    totalTie.volume = "0.3";
    totalTie.play();
}


function playMusic () {
    music.volume = "0.2";
    music.play();
    music.loop = true;
}

// Play the game 
function play() {
    if (resetTotalScore()) {
        return;
    }
    resetImages2();
    getComputerChoice();
    showPlayed ();
    compareChoices();
    showScore();
    resetScore();
    checkCount();
    }

// Hear for player's choice
rock.addEventListener("click", () => {
    playerChoice = 'rock';
    play();
    console.log(playerChoice)
})

paper.addEventListener("click", () => {
    playerChoice = 'paper';
    play()
    console.log(playerChoice)
})

scissors.addEventListener("click", () => {
    playerChoice = 'scissors';
    play()
    console.log(playerChoice)
})

// Hear for computer's choice
function getComputerChoice () {
    let number = (Math.floor(Math.random()* 101));
    if (number <= 33) {
        computerChoice = 'rock';
    }
    else if ( number <= 66) {
        computerChoice = 'paper'
    }
    else {
        computerChoice = 'scissors'
    }
}

// Show what was played
function showPlayed () {
    playerPlayText.innerText = `Player played ${playerChoice.toUpperCase()}`;
    computerPlayText.innerText = `Computer played ${computerChoice.toUpperCase()}`;
}

// Compare the choices 
function checkRock () {
    switch (computerChoice) {
        case 'paper' :  playerScore--;
                        computerScore++;
                        break;
        default:        playerScore++;
                        computerScore--;
    }
}

function checkPaper () {
    switch (computerChoice) {
        case 'scissors':playerScore--;
                        computerScore++;
                        break;
        default:        playerScore++;
                        computerScore--;
    }
}

function checkScissors () {
    switch (computerChoice) {
        case 'rock':    playerScore--;
                        computerScore++;
                        break;
        default:        playerScore++;
                        computerScore--;
    }
}

function compareChoices() {
    if (playerChoice === computerChoice) {

    }
    else {
       switch (playerChoice) {
        case 'rock':    checkRock();
                        break;
        case 'paper':   checkPaper();
                        break;
        default:        checkScissors();
       }
    }
}

// Show score
function showScore() {
if (playerScore == computerScore) {
    playTie();
    gameText.innerText = "It's a tie!";
}

else if (playerScore < computerScore) {
    computerTotalScore++;

    computerScoreText.innerText = `Computer score: ${computerTotalScore}`;
    playLose();
    gameText.innerText = "Computer wins.";
}
else {
    playerTotalScore++;

    playerScoreText.innerText = `Player score: ${playerTotalScore}`;
    playWin();
    gameText.innerText = "Player wins.";
}
}

// Reset the score variable 
function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

// Check game count 
function checkCount() {
    gameCount++;
    if (gameCount >= 5) {
        
        if (playerTotalScore == computerTotalScore) {
            playTotalTie();
            gameText.innerText = "Tie, What are the chances?!";
        }

        else if (playerTotalScore < computerTotalScore) {
            playTotalLose();
            gameText.innerText = "Better luck next time :(";
        }

        else {
            playTotalWin ();
            gameText.innerText = "Wow! You won.";
        }

        computerTotalScore = 0;
        playerTotalScore = 0;
    }
}

// Reset total score 
function resetTotalScore() {
    if (gameCount >=5) {
        computerScoreText.innerText = 'Computer score: 0';
        playerScoreText.innerText = 'Player score: 0';
        gameText.innerText = "Waiting again . . .";

        playerPlayText.innerText = `Waiting . . .`;
        computerPlayText.innerText = `Waiting . . .`;
        gameCount = 0;
        resetImages();
        return true;
    } 
}

// Reset image position (for mobiles)
function resetImages() {
    rockImage.style.transform = 'translateY(0)';
    paperImage.style.transform = 'translateY(0)';
    scissorsImage.style.transform = 'translateY(0)';
}

function resetImages2 () {
    rockImage.style.transform = '';
    paperImage.style.transform = '';
    scissorsImage.style.transform = '';
}
