const choices = ['rock','paper','scissors'];
const playerDisplay = document.getElementById("playerDisplay");
const computDisplay = document.getElementById("computDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore  = document.getElementById("playerScore");
const computerScore  = document.getElementById("computScore");
let playerscores = 0;
let computerscore = 0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()* 3)]; 
    let result = "";

    if(playerChoice === computerChoice){
        result= "IT'S A TIE"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors" ? "YOU WIN":"YOU LOSE")
                break;
            case "paper":
                result = (computerChoice === "paper" ? "YOU WIN": "YOU LOSE")
                break;
            case "scissors":
                result = (computerChoice === "rock" ? "YOU WIN": "YOU LOSE")
                break;
        }
    }
   
  playerDisplay.textContent = `PLAYER:${playerChoice }` ;
  computDisplay.textContent = `COMPUTER:${computerChoice }` ;
  resultDisplay.textContent = result;

   resultDisplay.classList.remove("greentext","redtext")

  switch(result){
    case "YOU WIN":
    playerscores ++;
resultDisplay.classList.add("greentext");
       playerScore.textContent = playerscores;
  
        break;
    case "YOU LOSE":
      computerscore ++resultDisplay.classList.add("redtext");
  
        computerScore.textContent = computerscore;
        break;

  }
}
