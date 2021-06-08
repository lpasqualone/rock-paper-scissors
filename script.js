let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let options = [ 'ROCK', 'PAPER', 'SCISSORS'];
    return options[Math.floor(Math.random() * options.length)]; 
}//console.log(computerPlay(options));

let computerSelection = computerPlay('options');

document.getElementById("computerOption").innerHTML = computerPlay();

function playRound() {

}