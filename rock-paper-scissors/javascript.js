let playerScore
let computerScore
let input

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

function playRound(playerSelection, computerSelection){
    if(playerSelection == "Rock" && computerSelection == "Scissors"){
        playerScore++
        console.log("You Win! Rock crushes Scissors")
    }
    if(computerSelection == "Rock" && playerSelection == "Scissors"){
        computerScore++
        console.log("You Lose! Rock crushes Scissors")
    }

    if(playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore++
        console.log("You Win! Paper covers Rock")
    }
    if(computerSelection == "Paper" && playerSelection == "Rock"){
        computerScore++
        console.log("You Lose! Paper covers Rock")
    }

    if(playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore++
        console.log("You Win! Scissors cuts Paper")
    }
    if(computerSelection == "Scissors" && playerSelection == "Paper"){
        computerScore++
        console.log("You Lose! Scissors cuts Paper")
    }
    if(playerSelection === computerSelection){
        console.log("There was a Tie")
    }
}

function correct(word){
    word = word.toLowerCase()
    let fl = word.slice(0,1)
    word = fl.toUpperCase() + word.slice(1,word.length)
    return word
}

function game(){
    playerScore = 0
    computerScore = 0

    for(i=0; i<5; i++){
        input = prompt("What is your move?")
        input = correct(input)
        
        while((input != "Rock") && (input != "Paper") && (input != "Scissors")){
            input = prompt("Invalid answer. What is your move?")
            input = correct(input)
        }
             
        playRound(input, computerSelection = getComputerChoice() )
    }
    if(playerScore>computerScore){
        return "You Win! Congrats: " + playerScore + "/" + computerScore
    }
    if(playerScore<computerScore){
        return "You Lose! Better luck next time: " + playerScore + "/" + computerScore
    }
    else{
        return "There was a Tie: " + playerScore + "/" + computerScore
    }
}