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
let computerScore = 0;
let playerScore = 0;
let round = 0;


function gameRound(playerSelection,computerSelection){
    switch (playerSelection.toLowerCase()){
        case "rock":
            if(computerSelection==="scissor"){
                playerScore++;
                round++;
                return console.log(`You won because ${playerSelection} beats ${computerSelection}`);
            }else if(computerSelection==="paper"){
                computerScore++
                round++;
                return console.log(`You lost because ${computerSelection} beats ${playerSelection}`);
            }else{
                console.log("It's a draw!");
                round++;
            }
        break;

        case "paper":
            if(computerSelection==="rock"){
                playerScore++;
                round++;
                return console.log(`You won because ${playerSelection} beats ${computerSelection}`);
            }else if(computerSelection==="scissor"){
                computerScore++
                round++;
                return console.log(`You lost because ${computerSelection} beats ${playerSelection}`);
            }else{
                console.log("It's a draw!")
                round++;
            }
        break;

        case "scissors":
            if(computerSelection==="paper"){
                playerScore++;
                round++;
                return console.log(`You won because ${playerSelection} beats ${computerSelection}`);
            }else if(computerSelection==="rock"){
                computerScore++
                round++;
                return console.log(`You lost because ${computerSelection} beats ${playerSelection}`);
            }else{
                console.log("It's a draw!")
                round++;
            }
        break;

    }
}

function game(){
    while(round != 5){
    const playerSelection = prompt("Rock, Paper or Scissors?");
    const computerSelection = getComputerChoise();
    gameRound(playerSelection,computerSelection);
    console.log("--------------\n");
    console.log("Round :"+round);
    console.log("Player SCORE = "+playerScore);
    console.log("CPU SCORE = "+computerScore)
    console.log("--------------\n");
    }

}

game();

