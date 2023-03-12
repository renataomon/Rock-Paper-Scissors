let player = 0
let computer = 0

// Computer choice. Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let choiceText = ['rock', 'paper', 'scissor']; //Choices definition
    let choiceIndex = Math.floor(Math.random()*choiceText.length); // Return randomly choice
    let computerSelection = choiceText[choiceIndex];
    console.log(computerSelection); // show in the console the computer choice
    return computerSelection
}

// Get the input value from player
function getPlayerChoice() {
    let inputValue = document.getElementById('textInput').value;
    let playerSelection = inputValue.toLowerCase(); //all lower case
    console.log(playerSelection);
    return playerSelection
}

function playRound() { 
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    let result = ""
    if (playerSelection == "rock" || 
        playerSelection == 'paper' || 
        playerSelection == 'scissor') {
            playerSelection = playerSelection
        } else {
            alert("Please type rock or paper or scissor")
            return
        }

    if (playerSelection === computerSelection) {
        result = "It's a tie!"
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        result = 'You Lose!!!! - ' + computerSelection + ' beats ' + playerSelection;
    } else {
        result = 'You Win!!!! - ' + playerSelection + ' beats ' + computerSelection;
    }
    document.getElementById('result').innerHTML = result;
    return result
}

function game() {
    if (player == 5 || computer == 5) {
        return
    } else {
        let finalResult = playRound()
        if (finalResult.includes("Win")) {
            player = parseInt(player) + 1;
        } else if (finalResult.includes("Lose")) {
            computer = parseInt(computer) + 1;
        }
        
        if (player == 5 || computer == 5) {
            if (player > computer) {
                result = "You Win (" + player + " x " + computer + ")";
            } else {
                result = "You loose (" + computer + " x " + player + ")";
            }
            document.getElementById('finalResult').innerHTML = result;
        }
        document.getElementById('computer').innerHTML = computer;
        document.getElementById('player').innerHTML = player;
    }
}