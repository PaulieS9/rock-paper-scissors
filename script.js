
const items = ["rock", "paper", "scissors"]
const winners = []
let playerScore = 0,
    computerScore = 0;

function getComputerChoice() {

    return items[(Math.floor(Math.random() * items.length))]

}

function playRound(input) {
    const playerSelection = input;
    const computerSelection = getComputerChoice();
    const winner = determineWinner(playerSelection, computerSelection);
    winners.push(winner);
    displayRound(playerSelection,computerSelection,winner)
}

function playGame() {
    for(let i = 1; i <= 5; i++) {
        playRound();
    }
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie"
    }
    else if ((humanChoice === "rock" && computerChoice == "scissors") || (humanChoice === "paper" && computerChoice == "rock") || (humanChoice === "scissors" && computerChoice == "paper")) {
        playerScore++;
        return "Player"
    }
    else {   
        computerScore++;      
        return "Computer"
    }
}

function displayRound(playerChoice,computerChoice,winner) {
    console.log("Results: ")
    console.log("Player: ",playerChoice)
    console.log("Computer :",computerChoice)
    if (winner == "Tie") {
        console.log("Tie")
    }
    else {
        console.log(winner," won the round")
    }
    console.log("Player Score: ",playerScore," Computer Score: ",computerScore)
    console.log("------------------------------------")    
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => playRound("rock"));

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => playRound("paper"));

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => playRound("scissors"));

