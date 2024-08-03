
let items = ["Rock", "Paper", "Scissors"]

let humanScore = 0,
    computerScore = 0

function getHumanChoice() {

    let humanChoice = prompt("Rock, paper, scissors: ")

    return humanChoice
}

function getComputerChoice() {

    return items[Math.floor(Math.random() * 3)]
}

function determineWinner() {


}