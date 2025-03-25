
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
        playRound(getHumanChoice(), getComputerChoice());
    }

    let winner = false;
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ){ winner = true; }

    return winner
}

function capitalize(string){ return string[0].toUpperCase + string.slice(1)}

function displayRoundResult(humanChoice, computerChoice, winner){
    const humanChoiceText = capitalize(humanChoice);
    const computerChoiceText = capitalize(computerChoice);
    if (winner){
        return alert(`You win! ${humanChoiceText} beats ${computerChoiceText}`)
    } else {
        return alert(`You lose! ${computerChoiceText} beats ${humanChoiceText}`)
    }

}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    while (round < 5){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        const winner = playRound();
        displayRoundResult(winner)
    }


}



console.log(getHumanChoice())
console.log(getComputerChoice())


prompt.log(
    `Rock...,
     Paper..., 
     Scissors..., 
     Shoot!`)