function getComputerChoice() {
    return parseInt(Math.random() * 3 + 1);
}

function getHumanChoice() {
    return prompt("Rock Paper or Scissors?");
}

let humanScore=0;
let computerScore=0;

function playRound(human, cpu) {
    if(human==="rock"){
        switch(cpu){
            case 1: console.log("Draw");
                break;
            case 2: console.log("Lose");
                computerScore++;
                break;
            case 3: console.log("Win");
                humanScore++;
                break;
        }
    }else
    if(human==="paper"){
        switch(cpu){
            case 1: console.log("Win");
                humanScore++;
                break;
            case 2: console.log("Draw");
                break;
            case 3: console.log("Lose");
                computerScore++;
                break;
        }
    }else
    if(human==="scissors"){
        switch(cpu){
            case 1: console.log("Lose");
                computerScore++;
                break;
            case 2: console.log("Win");
                humanScore++;
                break;
            case 3: console.log("Draw");
                break;
        }
    }
}


function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice().toLowerCase(),getComputerChoice());
    }
}
playGame();
console.log(humanScore);
console.log(computerScore);