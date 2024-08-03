
let items = ["Rock", "Paper", "Scissors"]

function getHumanChoice() {

    let humanChoice = prompt("Rock, paper, scissors: ")

    return humanChoice
}

function getComputerChoice() {

    return items[Math.floor(Math.random() * 3)]
}