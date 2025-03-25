
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

console.log(getHumanChoice())
console.log(getComputerChoice())


console.log(
    `Rock...,
     Paper..., 
     Scissors..., 
     Shoot!`)