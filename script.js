const rps = ["rock", "paper", "scissors"]

function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)]
}

function playround() {
    playerSelection = prompt("Choose between rock, paper and scissors").toLowerCase();
    computerSelection = computerPlay();
    let playwin = 0;
    let pcwin = 0;
    
    if (playerSelection === computerSelection) {
        console.log("It's a tie");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You won! Rock beats scissors");
        playwin += 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lost. Paper beats rock");
        pcwin += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You won! Scissors beats paper");
        playwin += 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lost. Rock beats scissors");
        pcwin += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lost. Scissors beats paper");
        pcwin += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You won! Paper beats rock");
        playwin += 1;
    } else {
        return("Please choose between rock paper and scissors only")
    }

    return [playwin, pcwin]
}

function game() {
    let playerscore = 0;
    let pcscore = 0;
    for (let i = 0; i < 5; i++) {
        let scores = playround();
        if (scores[0] === 1) {
            playerscore += 1;
            console.log(`Player won this round. Current player score is ${playerscore}. Current PC score is ${pcscore}.`);
        } else if (scores[1] === 1) {
            pcscore += 1;
            console.log(`PC won this round. Current player score is ${playerscore}. Current PC score is ${pcscore}.`);
        } else {
            console.log(`It's a tie. Current player score is ${playerscore}. Current PC score is ${pcscore}.`);
        }
    } 
    if (playerscore > pcscore) {
        console.log("Player won the game!");
    } else {
        console.log("PC won the game!")
    }
}