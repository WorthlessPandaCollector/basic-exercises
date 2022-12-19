// rock paper scissor CHEAT

const prompt = require("prompt-promise");

// declare a function

async function rockPapeSciss() {


    const userChoice = await prompt("rock, paper, scissors?");

    if(userChoice === "rock"){
        console.log("Ha, I chose paper!!!\n" + userChoice + " loses!!!!");
    }
    if(userChoice === "scissors"){
        console.log("Ha, I chose rock!!! \n" + userChoice + " loses!!!!!");
    }
    if(userChoice === "paper") {
        console.log("Ha, I chose scissors!!!! \n" + userChoice + " loses!!!!!!!");
    }


}

rockPapeSciss();

// lets try making a game loop
                        // that checks the user input, rock paper or scissor
                        // against a random loop over an array of [rock, paper, scissor]
                        // if rock vs paper = paper wins
                        // if paper vs scissor = scissor wins
                        // if rock vs scissor = rock wins
                        // 
                        // have it cheat so they say they always win...
                        // soooo
                        // if you throw paper, pc throws scissor
                        // if you throw scissor, pc picks rock
                        // if you throw rock, pc picks paper
                        // player can never win.



                    
                        
    
