const choices = document.querySelectorAll('.choice');
const scores = document.getElementById('scores');
const restart = document.getElementById('restart-btn');
const scoreHeading = document.getElementById('scoreHeading');

// Counter for score
let playerScore = 0;
let computerScore = 0;

// Play game
function playRound(e) {
    restart.style.display = 'block';
    const playerChoice = e.target.id;
    const computerChoice = computerPlay();
    const winner = getWinner(playerChoice, computerChoice);

    console.log(playerChoice, computerChoice, winner, playerScore, computerScore);
    console.log(scoreHeading.textContent);
    }

// Get computer choice
function computerPlay() {
    let options = [ 'rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)]; 
}

// Get game winner
function getWinner(p, c) {
    if (playerScore >= 5 && computerScore < 5) {
        scoreHeading.textContent = 'Nice! You Win!';
      } else if (playerScore < 5 && computerScore >= 5) {
        scoreHeading.textContent = 'Aw bummer, you lose.';
      }
      else if (p === c) {
        scoreHeading.textContent = 'Draw!'
        return 'draw';
    } else if (p === 'rock'){
        if (c === 'paper'){
            scoreHeading.textContent = 'You lose!'
            computerScore++;
            return 'computer';
        } else {
            scoreHeading.textContent = 'You win!'
            playerScore++;
            return 'player';
        }
    } else if (p === 'paper'){
        if (c === 'scissors'){
            scoreHeading.textContent = 'You lose!'
            computerScore++;
            return 'computer';
        } else {
            scoreHeading.textContent = 'You win!'
            playerScore++;
            return 'player';
        }
    } else if (p === 'scissors'){
        if (c === 'rock'){
            scoreHeading.textContent = 'You lose!'
            computerScore++;
            return 'computer';
        } else {
            scoreHeading.textContent = 'You win!'
            playerScore++;
            return 'player';
        }
    }
}

// Show score
function updateScore() {
    const playerScorePara = document.getElementById("playerScore");
    const computerScorePara = document.getElementById("computerScore");

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

// Game over
function gameOver() {
    if (playerScore >= 5 && computerScore < 5) {
        scoreHeading.textContent = 'Nice! You Win!';
      } else if (playerScore < 5 && computerScore >= 5) {
        scoreHeading.textContent = 'Aw bummer, you lose.';
      };
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    playRound(event);
}



// Event listeners
choices.forEach(choice => choice.addEventListener('click', (event) => {
	playRound(event);
	updateScore();
    gameOver();
}));
restart.addEventListener('click', restartGame);