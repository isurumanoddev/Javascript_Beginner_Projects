function getComputerChoice() {
    const rps = ["Scissors", "Paper", "Rock"]
    const random = Math.floor(Math.random() * rps.length)
    return rps[random]

}

let score;

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        score = 0;
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        score = 1
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        score = 1
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        score = 1;
    } else {
        score = -1;
    }
    return score

}

function showResult(score, playerChoice, computerChoice) {
    let winner ;
    playerScore.innerText = result
    if (score === 1) {
        winner = "You Win The Game !"
    }else if (score === -1) {
        winner = "Computer Win The Game !";
    } else {
        winner = "Game Drawn !"
    }
    resultWinner.innerText = winner

}

const clickedItem = document.querySelectorAll(".rpsButton")

const playerScore = document.getElementById("player-score")
const resultWinner = document.getElementById("result");

const result = 0;


function onClickRPS(playerChoice) {
    console.log({playerChoice})
    let computerChoice = getComputerChoice();
    console.log({computerChoice})
    const result = getResult(playerChoice,computerChoice);
    console.log({result})
    
    
    
    


}

function playGame() {
    clickedItem.forEach((item) => {
        item.onclick = () => {

            onClickRPS(item.value)

        };
    })
}

playGame()