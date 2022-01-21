function computerPlay() {
    let numChoice = Math.floor(Math.random() * 3);
    if (numChoice == 0) return "rock";
    else if (numChoice == 1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        switch(computerSelection) {
            case "paper":
                return "You Lose! Paper beats Rock";
                break;
            case "scissors":
                return "You Win! Rock beats Scissors";
                break;
        }

    }
    else if (playerSelection === "paper") {
        switch(computerSelection) {
            case "scissors":
                return "You Lose! Scissors beats Paper";
                break;
            case "rock":
                return "You Win! Paper beats Rock";
                break;
        }
    }
    else if (playerSelection === "scissors") {
        switch(computerSelection) {
            case "rock":
                return "You Lose! Rock beats Scissors";
                break;
            case "paper":
                return "You Win! Scissors beats Rock";
                break;
        }
    }
}
let playerWins = 0;
let computerWins = 0;
let playerSelection = "";
let computerSelection = "";

function game(playerSelection) {
    if (playerWins < 5 && computerWins < 5) {
    computerSelection = computerPlay();
    while(computerSelection === playerSelection) computerSelection = computerPlay();
    let roundWin = playRound(playerSelection, computerSelection);

    if (roundWin.includes("Win")) playerWins++;
    else if (roundWin.includes("Lose")) computerWins++;

    document.querySelector('.score-label').textContent = roundWin;
    document.querySelector('.score-num').textContent = `${playerWins} - ${computerWins}`;
    }
    else if (playerWins === 5) {
        document.querySelector('.score-label').textContent = "Game over. You Win!";
    }
    else if (computerWins === 5) {
        document.querySelector('.score-label').textContent = "Game over. You Lose!";
    }
}
const onClick = function() {
    game(this.id);
    playerMove(this.id);
    computerMove(computerSelection);

}

const playerMove = function(move) {
    if(playerWins < 5 && computerWins < 5) {
        const playerMove = document.createElement('p');
        playerMove.textContent = move;
        document.getElementById('player-select').appendChild(playerMove);
    }
}

const computerMove = function(move) {
    if(playerWins < 5 && computerWins < 5) {
        const computerMove = document.createElement('p');
        computerMove.textContent = move;
        document.getElementById('computer-select').appendChild(computerMove);
    }
}
document.getElementById('rock').onclick = onClick;
document.getElementById('paper').onclick = onClick;
document.getElementById('scissors').onclick = onClick;