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
    return playerSelection
    console.log(playerSelection);
}

function playRound() { 
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    if (playerSelection == "rock" || 
        playerSelection == 'paper' || 
        playerSelection == 'scissor') {
            playerSelection = playerSelection
        } else {
            playerSelection = 'error'
            alert("Please type rock or paper or scissor")
        }
    document.getElementById('computer').innerHTML = computerSelection;
    document.getElementById('player').innerHTML = playerSelection
}






