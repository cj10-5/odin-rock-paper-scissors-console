
const CHOICES = ["rock", "paper", "scissor"]

function getHumanChoice(){
    let choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    while (!CHOICES.includes(choice)){
        choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    }
    return choice
}

console.log(getHumanChoice())


console.log(
    `Rock...,
     Paper..., 
     Scissors..., 
     Shoot!`)