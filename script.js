const variant = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your weapon');
        const computerSelection = computerPlay();
        console.log(gameRound(playerSelection.toLowerCase(), computerSelection));
    }
}

function computerPlay() {
    return variant[Math.floor(Math.random() * 2)];
}

function gameRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) console.log('Tie');
    else switch(playerSelection) {
        case 'rock':
            if (computerSelection == 'scissors') {
                playerScore += 1;
                return 'You Win! Rock beats Scissors';
            }
            else {
                computerScore += 1;
                return 'You Lose! Paper beats Rock';
            }
        case 'paper':
            if (computerSelection == 'rock') {
                playerScore += 1;
                return 'You Win! Paper beats Rock';
            }
            else {
                computerScore += 1;
                return 'You Lose! Scissors beats Paper';
            }
        case 'scissors':
            if (computerSelection == 'paper') {
                playerScore += 1;
                return 'You Win! Scissors beats Paper';
            }
            else {
                computerScore += 1;
                return 'You Lose! Rock beats Scissors';
            }
    }
}

game();
console.log(playerScore, computerScore);
if (playerScore == computerScore) console.log("It's a tie!");
else if (playerScore > computerScore) console.log(`You're a winner! You won ${playerScore} times`);
else console.log(`Computer is a winner! It won ${computerScore} times`); 