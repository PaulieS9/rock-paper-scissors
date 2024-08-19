
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
    console.log("Player: ",playerChoice)

    const results = document.createElement("div");
    results.classList.add("results");
    results.textContent = 'Results:'
    

    const selections = document.createElement("div");
    selections.classList.add("selections");
    selections.textContent = 'Player Choice: ' + playerChoice + ' | Computer Choice: ' + computerChoice;

    
    const victor = document.createElement("div");
    victor.classList.add("victor");
    
    if (winner == "Tie") {
        victor.textContent = 'Tie.'
    }
    else {
        victor.textContent = winner + ' won the round.'
    }

    const score = document.createElement("div");
    score.classList.add("score");
    score.textContent = 'Player Score: ' + playerScore + ' | Computer Score: ' + computerScore;
    
    displayContainer.appendChild(results);
    displayContainer.appendChild(selections);
    displayContainer.appendChild(victor);
    displayContainer.appendChild(score);
    
}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => playRound("rock"));

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => playRound("paper"));

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => playRound("scissors"));

const displayContainer = document.querySelector("#display");



