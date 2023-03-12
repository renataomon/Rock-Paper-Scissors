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
        result = "Empate"
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
    document.getElementById('computer').innerHTML = computerSelection;
    document.getElementById('player').innerHTML = playerSelection;
}






