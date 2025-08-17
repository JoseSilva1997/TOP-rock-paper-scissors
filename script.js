console.log("Time to play rock-paper-scissors!");

const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const rounds = 5;


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const humanInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (choices.includes(humanInput)) {
        return humanInput;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        alert(`Computer chose ${computerChoice} you chose ${humanChoice}. It's a tie!`);
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        alert(`Computer chose ${computerChoice} you chose ${humanChoice}. You lose!`);
        computerScore++;
    } else {
        alert(`Computer chose ${computerChoice} you chose ${humanChoice}. You win!`);
        humanScore++;
    }
}

function playGame() {
    for (let i = 0; i < rounds; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
        if (humanScore === 3 || computerScore === 3) {
            break;
        }
    }
    showWinner(humanScore, computerScore);
    resetGame(confirm("Do you want to play again?"));

}

function showWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        alert(`Your score: ${humanScore}\nComputer's score: ${computerScore}.\nYou win!`);
    } else if (humanScore < computerScore) {
        alert(`Your score: ${humanScore}\nComputer's score: ${computerScore}.\nYou lose!`);
    } else {
        alert(`Your score: ${humanScore}\nComputer's score: ${computerScore}.\nIt's a tie!`);
    }
}

function resetGame(humanChoice) {
    if (humanChoice) {
        alert(`You chose ${humanChoice}. The game will be reset.`);
        humanScore = 0;
        computerScore = 0;
        playGame();
        return;
    }
    return;
}

playGame();