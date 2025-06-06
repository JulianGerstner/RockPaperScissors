function getComputerChoice() {
    return parseInt(Math.random() * 3 + 1);
}

// function getHumanChoice() {
//     return prompt("Rock Paper or Scissors?");
// }
const rock = document.querySelector("#rock");
rock.addEventListener("click", ()=>{
    playRound("rock",getComputerChoice());
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", ()=>{
    playRound("paper",getComputerChoice());
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", ()=>{
    playRound("scissors",getComputerChoice());
});
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
    document.getElementById("wins").textContent = humanScore;
    document.getElementById("loss").textContent = computerScore;
    if(humanScore===5){
        alert("Human Wins");
        humanScore = 0;
    }else if(computerScore===5){
        alert("Computer Wins");
        computerScore = 0;
    }
   


}



