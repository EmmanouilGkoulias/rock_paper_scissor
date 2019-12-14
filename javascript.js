let player;
let computer;
let winner;

function userInput() {
    player = prompt("Rock, Paper or Scissor?").toLowerCase();
    console.log(player);
    return player;    
}

function computerPlay() {
    let choices = ["rock", "paper", "scissor"];
    computer = choices[Math.floor(Math.random()*choices.length)];
    console.log(computer);
    return computer;
}

function singleRound(computerSelection, playerSelection) {
    switch (computerSelection) {
        case "rock":
            switch (playerSelection) {
                case "rock":
                    winner = 0;
                    break;
                case "paper":
                    winner = 1;
                    break;
                case "scissor":
                    winner = -1;
                    break;
            }
            break;
        case "paper":
            switch (playerSelection) {
                case "rock":
                    winner = -1;
                    break;
                case "paper":
                    winner = 0;
                    break;
                case "scissor":
                    winner = 1;
                    break;
            }
            break;
        case "scissor":
                switch (playerSelection) {
                    case "rock":
                        winner = 1;
                        break;
                    case "paper":
                        winner = -1;
                        break;
                    case "scissor":
                        winner = 0;
                        break;
                }
            break;
    }
    
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1); 

    if (winner === 0) {
        console.log("Draw!"); 
    }
    else if (winner > 0) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    }
    else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    }
}