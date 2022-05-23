const variant = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const consoleDiv = document.querySelector('.console');

// function game() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Choose your weapon');
//         const computerSelection = computerPlay();
//         console.log(gameRound(playerSelection.toLowerCase(), computerSelection));
//     }
// }

function computerPlay() {
    return variant[Math.floor(Math.random() * 3)];
}

function gameRound(playerSelection){
    console.log(playerSelection);
    const computerSelection = computerPlay();
    console.log(computerSelection);
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
}

if (playerScore == computerScore) console.log("It's a tie!");
else if (playerScore > computerScore) console.log(`You're a winner! You won ${playerScore} times`);
else console.log(`Computer is a winner! It won ${computerScore} times`); 