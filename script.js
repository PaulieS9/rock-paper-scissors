
let items = ["rock", "paper", "scissors"]

let humanScore = 0,

    computerScore = 0

function getHumanChoice() {

    let userInput = prompt("Rock, paper, scissors: ")

    return userInput.toLowerCase
}

function getComputerChoice() {

    return items[Math.floor(Math.random() * 3)]
}

function playGame(humanChoice, computerChoice) {



}