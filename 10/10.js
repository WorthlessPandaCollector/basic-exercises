const prompt = require("prompt-promise");

const game = {
    choices: ["rock", "paper", "scissors"],
    computerChoice: [],
    userChoice: [],

    pcRando() {

        
            const pcChoice = Math.floor(Math.random() * this.choices.length);
            const ins = this.choices[pcChoice];
            this.computerChoice.push(ins);
        },

    async gameRun(){
        const promptUser = await prompt("rock, paper, scissors");
        this.userChoice.push(promptUser);
        console.log(game);

        let winner;

        if(this.userChoice[0] === this.computerChoice[0]){
            winner = "tied";
        } else if (this.userChoice[0] === "paper" && this.computerChoice[0] === "rock") {
            winner = "user";
        } else if (this.userChoice[0] === "rock" && this.computerChoice[0] === "scissors") {
            winner = "user";
        } else if (this.userChoice[0] === "scissors" && this.computerChoice[0] === "paper") {
            winner = "user";
        } else {
            winner = "PC";
        }

        if(winner === "tied") {
            console.log("you tied. you chose " + this.userChoice + "PC chose " + this.computerChoice);
        } else if (winner === "user") {
            console.log("you win.  you chose " + this.userChoice + "PC chose " + this.computerChoice);
        } else if (winner === "PC") {
            console.log("you lose. you chose " + this.userChoice + "PC chose " + this.computerChoice); 
        }


        } 
    }
 

game.pcRando();
console.log(game);
game.gameRun();

           





