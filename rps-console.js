
const CHOICES = ["rock", "paper", "scissors"]

random = () => Math.floor(Math.random() * CHOICES.length)

function getHumanChoice(){
    let choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    while (!CHOICES.includes(choice)){
        choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    }
    return choice
}

function getComputerChoice(){
    return CHOICES[random()]
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        playRound(getComputerChoice(), getComputerChoice())
    }

    let winner = false;
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ){ winner = true; }

    return winner
}



console.log(getHumanChoice())
console.log(getComputerChoice())


prompt.log(
    `Rock...,
     Paper..., 
     Scissors..., 
     Shoot!`)