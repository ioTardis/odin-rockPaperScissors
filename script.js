const variant = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

//Targeting input DOM nodes with selectors

const consoleDiv = document.querySelector('.console');
const scoreDiv = document.querySelector('.score');
const modal = document.querySelector('#resetGame');
const span = document.querySelector('.close');

//Computer's choice

function computerPlay() {
    return variant[Math.floor(Math.random() * 3)];
}

//Function that reveals a winner

function finishGame(winner) {
    modal.style.display = 'block';
    const content = document.createElement('p');
    const container = document.querySelector('.modal-body');
    content.classList.add('message');
    if (winner === 'player') {
        content.textContent = "You're the winner!";
        container.appendChild(content);
    } else {
        content.textContent = 'Computer is the winner!';
        container.appendChild(content);
    }
}

//Function to reset the game

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    const element = document.querySelector('.message');
    element.remove();
    modal.style.display = 'none';
    consoleDiv.textContent = 'Choose your weapon';
    scoreDiv.textContent = `You: ${playerScore} Computer: ${computerScore}`;
}

//Function to play one round

function gameRound(playerSelection){
    const computerSelection = computerPlay();
    if (playerSelection == computerSelection) consoleDiv.textContent = "It's a tie!";
    else switch(playerSelection) {
        case 'rock':
            if (computerSelection == 'scissors') {
                playerScore += 1;
                consoleDiv.textContent = 'You Win! Rock beats Scissors';
                break;
            }
            else {
                computerScore += 1;
                consoleDiv.textContent = 'You Lose! Paper beats Rock';
                break;
            }
        case 'paper':
            if (computerSelection == 'rock') {
                playerScore += 1;
                consoleDiv.textContent = 'You Win! Paper beats Rock';
                break;
            }
            else {
                computerScore += 1;
                consoleDiv.textContent = 'You Lose! Scissors beats Paper';
                break;
            }
        case 'scissors':
            if (computerSelection == 'paper') {
                playerScore += 1;
                consoleDiv.textContent = 'You Win! Scissors beats Paper';
                break;
            }
            else {
                computerScore += 1;
                consoleDiv.textContent = 'You Lose! Rock beats Scissors';
                break;
            }
    }

    scoreDiv.textContent = `You: ${playerScore} Computer: ${computerScore}`;


    if (playerScore === 5) finishGame('player');
    if (computerScore === 5) finishGame('computer');
}