function computerPlay() {
    let numChoice = Math.floor(Math.random() * 3);
    if (numChoice == 0) return "rock";
    else if (numChoice == 1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "Tie!";
    else if (playerSelection === "rock") {
        switch(computerSelection) {
            case "paper":
                return "You Lose! Paper beats rock";
                break;
            case "scissors":
                return "You Win! Rock beats scissors";
                break;
        }

    }
    else if (playerSelection === "paper") {
        switch(computerSelection) {
            case "scissors":
                return "You Lose! Scissors beats paper";
                break;
            case "rock":
                return "You Win! Paper beats rock";
                break;
        }
    }
    else if (playerSelection === "scissors") {
        switch(computerSelection) {
            case "rock":
                return "You Lose! Rock beats scissors";
                break;
            case "paper":
                return "You Win! Scissors beats rock";
                break;
        }
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What is your move?").toLowerCase();
        let computerSelection = computerPlay();
        let roundWin = playRound(playerSelection, computerSelection);

        if (roundWin.includes("Win")) playerWins++;
        else if (roundWin.includes("Lose")) computerWins++;

        console.log(roundWin);
        console.log(`Current score is ${playerWins} - ${computerWins}`);
    }
}
game();