let player = 0;
let computer = 0;
let result = ""
window.addEventListener("load", function() {
    document.getElementById("new").disabled=true; // or removeAttribute("disabled")
  })

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
    if (playerSelection == "rock" || 
        playerSelection == 'paper' || 
        playerSelection == 'scissor') {
            playerSelection = playerSelection
        } else {
            alert("Please type rock or paper or scissor")
            return
        }

    if (playerSelection === computerSelection) {
        if (result.includes("tie")) {
            result = result + " Again!"
        } else {
            result = "It's a tie!"
        }
    } else if (
        (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "scissor" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        result = 'You Lose!!!! - ' + computerSelection + ' beats ' + playerSelection;
    } else if (
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "scissor" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    )  {
        result = 'You Win!!!! - ' + playerSelection + ' beats ' + computerSelection;
    }
    document.getElementById('result').innerHTML = result;
    return result
}


function game() {
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

        if (player == 5 || computer == 5) {
            document.getElementById("textInput").disabled = true;
            document.getElementById("btn").disabled = true;
            document.getElementById("new").disabled = false;
            return
        }
}