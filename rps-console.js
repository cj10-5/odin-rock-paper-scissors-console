
const CHOICES = ["rock", "paper", "scissors"]

random = () => Math.floor(Math.random() * CHOICES.length)

function getHumanChoice(){
    let choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    while (!CHOICES.includes(choice)){
        choice = prompt("Invalid choice. Choose rock, paper, or scissors").toLowerCase();
    }
    return choice
}

function getComputerChoice(){
    return CHOICES[random()]
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        alert("Draw! Choose again")
        playRound(getHumanChoice(), getComputerChoice());
    }

    let winner = false;
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ){ winner = true; }

    // If winner is true increment humanScore, else increment computerScore
    winner ? humanScore++ : computerScore++

    return winner
}

function capitalize(string){ return string[0].toUpperCase + string.slice(1)}

function displayRoundResult(humanChoice, computerChoice, winner){
    const humanChoiceText = capitalize(humanChoice);
    const computerChoiceText = capitalize(computerChoice);
    if (winner){
        console.log(`You win! ${humanChoiceText} beats ${computerChoiceText}`)
        return alert(`You win! ${humanChoiceText} beats ${computerChoiceText}`)
    } else {
        console.log(`You lose! ${computerChoiceText} beats ${humanChoiceText}`)
        return alert(`You lose! ${computerChoiceText} beats ${humanChoiceText}`)
    }

}

let humanScore = 0;
let computerScore = 0;
function playGame(){
    
    let round = 0;
    while (round < 5){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        const winner = playRound(humanChoice, computerChoice);
        displayRoundResult(humanChoice, computerChoice, winner);
        round++;
    }

    humanScore > computerScore ? 
    alert("YOU WIN THE GAME! GREAT JOB!") :
    alert("YOU LOSE THE GAME! BETTER LUCK NEXT TIME")
}


console.log(`Rock..,
Paper.., 
Scissors.., 
Shoot!`)

playGame()