let player;
let computer;
let winner;
let userCount = 0;
let pcCount = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];
    computer = choices[Math.floor(Math.random()*choices.length)];
    return computer;
}

function singleRound(computerSelection, playerSelection) {
    if (computerSelection == 'rock') {
        if (playerSelection == 'rock') {
            winner = 0;
        }
        else if (playerSelection == 'paper') {
            winner = 1;
            userCount ++;
        }   
        else {
            winner = -1;
            pcCount ++;
        }
    }
    else if (computerSelection == 'paper') {
        if (playerSelection == 'rock') {
                winner = -1;
                pcCount ++;
        }
        else if (playerSelection == 'paper') {
                winner = 0;
            }   
        else {
                winner = +1;
                userCount ++;
            }
        }
    else {
        if (computerSelection == 'scissor') {
            if (playerSelection == 'rock') {
                winner = +1;
                userCount ++;
            }
            else if (playerSelection == 'paper') {
                winner = -1;
                pcCount ++;
            }   
            else {
                winner = 0;
            }
        }
    }

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if (winner > 0) {
        message.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
        userScore.innerHTML = userCount;
    }
    else if (winner < 0) {
        message.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
        pcScore.innerHTML = pcCount;
    }       
    else {
        message.innerHTML = 'Draw!';
    }
}

function game(player) {
    computerPlay();
    singleRound(computer, player);
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', event => {
    game('rock');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', event => {
    game('paper');
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', event => {
    game('scissor');
});

const userScore = document.querySelector('#userScore');
const pcScore = document.querySelector('#pcScore');
const message = document.querySelector('p');

const reset = document.querySelector('#reset');
reset.addEventListener('click', event => {
    pcScore.innerHTML = '0';
    userScore.innerHTML = '0';
    pcCount = 0;
    userCount = 0;
});
