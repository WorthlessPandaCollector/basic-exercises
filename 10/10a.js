const prompt = require("prompt-promise");


const pc = {
    pick: ["rock", "paper", "scissors"],
    randomPick: [],
    createRandomPick () {
        const randomNum = Math.floor(Math.random() * this.pick.length);
        const random = this.pick[randomNum];
        this.randomPick.push(random);
    }
}

const user = {
    usersPick: [],

}

async function game (){

    const userPicks = await prompt("rock, paper, scissors????????????");
    userVar = userPicks;
    user.usersPick.push(userVar);   
    pc.createRandomPick(); 
    
    let winner;
    if(user.usersPick[0] === pc.randomPick[0]) {
        winner = "tied";
    } else if(user.usersPick[0] === "rock" && pc.randomPick[0] === "scissors") {
        winner = "user";
    } else if(user.usersPick[0] === "paper" && pc.randomPick[0] === "rock") {
        winner = "user";
    } else if(user.usersPick[0] === "scissors" && pc.randomPick[0] === "paper") {
        winner = "user";
    } else {
        winner = "pc";
    }

    if(winner === "tied") {
        console.log("Tie");
    } else if(winner === "user"){
        console.log("USER WINS")
    } else if (winner === "pc") {
        console.log("PC WINS")
    }
    console.log(user);
    console.log(pc);
}


game();