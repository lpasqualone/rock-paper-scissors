const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const restart = document.getElementById('restart-btn');

const scoreboard = {
    Player: 0,
    Computer: 0,
}

document.getElementById("playerScore").innerHTML = 'Player:' + ' ' + scoreboard.Player
document.getElementById("computerScore").innerHTML = 'Computer:' + ' ' + scoreboard.Player


// Play game
function playRound(e) {
    restart.style.display = 'block';
    const playerChoice = e.target.id;
    const computerChoice = computerPlay();
    const winner = getWinner(playerChoice, computerChoice);

    console.log(playerChoice, computerChoice, winner, scoreboard)
}

// Get computer choice
function computerPlay() {
    let options = [ 'rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)]; 
}

// Get game winner
function getWinner(p, c) {
    if (p === c) {
        return 'draw';
    } else if (p === 'rock'){
        if (c === 'paper'){
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'paper'){
        if (c === 'scissors'){
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'scissors'){
        if (c === 'rock'){
            return 'computer';
        } else {
            return 'player';
        }
    }
}

// Show winner of round
function showWinner(winner){
    if(winner === 'player'){
        // Inc player score
        scoreboard.Player++;
    } else if (winner === 'computer'){
        scoreboard.Computer++;
    }

//Show score
    score.innerHTML = `
    <p>Player: ${scoreboard.Player}</p>
    <p>Computer: ${scoreboard.Computer}</p>
    `;

    document.getElementById("computerChoice").innerHTML = computerPlay();
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', playRound));