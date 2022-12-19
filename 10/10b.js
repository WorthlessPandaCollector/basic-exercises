const prompt = require("prompt-promise");

async function letsFightingLove() {

    let userMove = await prompt("Choose rock, paper, or scissors");

    const moves = ["rock", "paper", "scissors"];

    let pcMove = moves[Math.floor(Math.random() * moves.length)];

    let winner;

    if(userMove === pcMove) {
        winner = "tie";
    } else if (userMove === 'rock' && pcMove === 'scissors') {
        winner = 'user';
    } else if (userMove === 'paper' && pcMove === 'rock') {
        winner = 'user';
    } else if (userMove === 'scissors' && pcMove === 'paper'){
        winner = 'user';
    } else {
        winner = 'PC';
    }
console.log(`You chose ${userMove}, PC chose ${pcMove}`);
    if (winner === "tie") {
        console.log("You tied");
    } else if (winner === 'user'){
        console.log("User wins!!");
    } else if (winner === 'PC'){
        console.log("PC Wins!");
    }



    }

letsFightingLove();





