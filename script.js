const variant = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return variant[Math.floor(Math.random() * 2)];
}

function gameRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) console.log('Tie');
    else switch(playerSelection) {
        case 'rock':
            if (computerSelection == 'scissors') return 'You Win! Rock beats Scissors';
            else return 'You Lose! Paper beats Rock';
            break;
        case 'paper':
            if (computerSelection == 'rock') return 'You Win! Paper beats Rock';
            else return 'You Lose! Scissors beats Paper';
            break;
        case 'scissors':
            if (computerSelection == 'paper') return 'You Win! Scissors beats Paper';
            else return 'You Lose! Rock beats Scissors';
            break;
    }
}

const playerSelection = 'rock';
console.log(gameRound(playerSelection, computerPlay()));