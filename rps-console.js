
const CHOICES = ["rock", "paper", "scissors"]

random = () => Math.floor(Math.random() * CHOICES.length)

function getHumanChoice(){
    let choice = prompt("Choose rock, paper, or scissors");
    while (!choice || !CHOICES.includes(choice.toLowerCase())){
        choice = prompt("Invalid choice. Choose rock, paper, or scissors");
    }
    return choice.toLowerCase()
}

function getComputerChoice(){
    return CHOICES[random()]
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){ 
        alert("Draw. Choose again");
        return; 
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

function capitalize(string){ return string.at(0).toUpperCase() + string.slice(1)}

function displayRoundResult(round, humanChoice, computerChoice, winner){
    const humanChoiceText = capitalize(humanChoice);
    const computerChoiceText = capitalize(computerChoice);
    if (winner){
        console.log(`Round ${round}: You win! ${humanChoiceText} beats ${computerChoiceText}`)
        return alert(`Round ${round}: You win! ${humanChoiceText} beats ${computerChoiceText}`)
    } else {
        console.log(`Round ${round}: You lose! ${computerChoiceText} beats ${humanChoiceText}`)
        return alert(`Round ${round}: You lose! ${computerChoiceText} beats ${humanChoiceText}`)
    }

}

let humanScore = 0;
let computerScore = 0;
function playGame(){
    
    let round = 0;
    while (round < 5){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let winner = playRound(humanChoice, computerChoice);
        // If draw run playRound again with new choices
        while (winner === undefined){
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
            winner = playRound(humanChoice, computerChoice);
        }

        displayRoundResult(round + 1, humanChoice, computerChoice, winner);
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