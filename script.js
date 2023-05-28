function getComputerChoise(){
    let wordChoise = Math.floor(Math.random() *(3)+1);

    switch(wordChoise){
        case 1:
            return "paper";
            break;
        case 2:
            return "rock";
            break;
        case 3:
            return "scissor";
            break;    
    }
}

const playerSelection = prompt("Rock, Paper or Scissor?");
const computerSelection = getComputerChoise();

function gameRound(playerSelection,computerSelection){
    switch (playerSelection.toLowerCase()){
        case "rock":
            if(computerSelection==="scissor"){
                return console.log(`You won because ${playerSelection} beats ${computerSelection}`);
            }else if(computerSelection==="paper"){
                return console.log(`You lost because ${computerSelection} beats ${playerSelection}`);
            }else{
                console.log("It's a draw!")
            }
        break;

        case "paper":
            if(computerSelection==="rock"){
                return console.log(`You won because ${playerSelection} beats ${computerSelection}`);
            }else if(computerSelection==="scissor"){
                return console.log(`You lost because ${computerSelection} beats ${playerSelection}`);
            }else{
                console.log("It's a draw!")
            }
        break;

        case "scissors":
            if(computerSelection==="paper"){
                return console.log(`You won because ${playerSelection} beats ${computerSelection}`);
            }else if(computerSelection==="rock"){
                return console.log(`You lost because ${computerSelection} beats ${playerSelection}`);
            }else{
                console.log("It's a draw!")
            }
        break;

    }
}

gameRound(playerSelection,computerSelection);

