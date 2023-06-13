//Global Variables
let playerScore = 0
let computerScore = 0
let input

//Function provides a random choice for the computer using Math.random
function getComputerChoice(){
  let random = Math.random()
  
  if(random < .33){
    return "Rock"
  }
  if(random >= .33 && random <= .66){
    return "Paper"
  }
  if(random > .66){
    return "Scissors"
  }
  else{
    return "There was an error"
  }
}

//Function deterimnes if players Win, lose, or tie. Has two parameters, one for player and one for computer. Parameters can be changed when called on its own, but are case sensitive
function playRound(playerSelection, computerSelection){
    if(playerSelection == "Rock" && computerSelection == "Scissors"){
        playerScore++
        div.textContent = "Score: " + playerScore + "/" + computerScore + " You Win! Rock crushes Scissors"
    }
    if(computerSelection == "Rock" && playerSelection == "Scissors"){
        computerScore++
        div.textContent = "Score: " + playerScore + "/" + computerScore + " You Lose! Rock crushes Scissors"
    }

    if(playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore++
        div.textContent = "Score: " + playerScore + "/" + computerScore + " You Win! Paper covers Rock"
    }
    if(computerSelection == "Paper" && playerSelection == "Rock"){
        computerScore++
        div.textContent = "Score: " + playerScore + "/" + computerScore + " You Lose! Paper covers Rock"
    }
    
    if(playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore++
        div.textContent = "Score: " + playerScore + "/" + computerScore + " You Win! Scissors cuts Paper"
    }
    if(computerSelection == "Scissors" && playerSelection == "Paper"){
        computerScore++
        div.textContent = "Score: " + playerScore + "/" + computerScore + " You Lose! Scissors cuts Paper"
    }
    if(playerSelection === computerSelection){
        div.textContent = "Score: " + playerScore + "/" + computerScore + " There was a Tie"
    }
    if((playerScore == 5) && (computerScore < 5)){
        div.textContent = "Score: " + playerScore + "/" + computerScore + " The Player wins"
    }
    if((computerScore == 5) && (playerScore < 5)){
        div.textContent = "Score: " + playerScore + "/" + computerScore + " The Computer wins"
    }
    if((playerScore == 5) && (computerScore == 5)){
        div.textContent = "Game is broken, this should not happen"
    }
}

const body = document.body

const rock = document.createElement('button')
rock.textContent = "Rock"
rock.addEventListener('click', function(){
    playRound(playerSelection = this.textContent, computerSelection = getComputerChoice())
})

const paper = document.createElement('button')
paper.textContent = "Paper"
paper.addEventListener('click', function(){
    playRound(playerSelection = this.textContent, computerSelection = getComputerChoice())
})

const scissors = document.createElement('button')
scissors.textContent = "Scissors"
scissors.addEventListener('click', function(){
    playRound(playerSelection = this.textContent, computerSelection = getComputerChoice())
})
const div = document.createElement('div')
div.textContent = "Score: " + playerScore + "/" + computerScore

body.append(rock, paper, scissors, div)