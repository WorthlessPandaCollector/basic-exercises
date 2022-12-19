const prompt = require("prompt-promise");

let games = 0;



async function gameTracker(){
    const rounds = await prompt ("Choose number of rounds: 1 - 5\n");  // choose number of rounds
                                                                        //run gameloop for the number of rounds user picked

    while(games < rounds){
        games = await gameLoop();
        console.log("ROUND " + games + " of " + rounds + " COMPLETE");
        const cont = await prompt("hit enter");
    }
    
    console.log("GAME OVER");
    
}


    let userWins = 0;
    let pcWins = 0;


async function gameLoop() {

    let charDecide = await prompt("rock, paper, scissors?");

    const moves = ["rock", "paper", "scissors"];

    let pcRandom = moves[Math.floor(Math.random() * moves.length)];

    let winner;
    let rounds;


        if(pcRandom === charDecide) {
            winner = "tied";
            userWins += 0;
            pcWins += 0;
            games += 1;
        } else if(charDecide === "rock" && pcRandom === "scissors") {
            winner = "user";
            userWins += 1;
            games += 1;
        } else if(charDecide === "paper" && pcRandom === "rock") {
            winner = "user";
            userWins += 1;
            games += 1;
        } else if(charDecide === "scissors" && pcRandom === "paper") {
            winner = "user";
            userWins += 1;
            games += 1;
        } else {
            winner = "pc";
            pcWins += 1;
            games += 1;
        }

        if(winner === "tied") {
            console.log("\n| TIED | PC picked " + pcRandom + " User picked " + charDecide);
        } else if (winner === "user") {
            console.log("\n| USER WINS | PC picked " + pcRandom + " User picked " + charDecide);
        } else if(winner === "pc") {
            console.log("\n| PC WINS | PC picked " + pcRandom + " User picked " + charDecide);
        } 
        console.log("|       USER WINS         | " + userWins);
        console.log("|       PC WINS           | " + pcWins);
        return games;
    }


gameTracker();