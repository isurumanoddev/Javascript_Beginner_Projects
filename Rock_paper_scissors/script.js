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
const totalScore = {"Computer Score":0,"Player Score":0}

function showResult(score, playerChoice, computerChoice) {
    let winner ;
    if (score === 1) {
        totalScore["Player Score"] += 1
        winner = "You Win The Game !"
    }else if (score === -1) {
        winner = "Computer Win The Game !";
        totalScore["Computer Score"] += 1
    } else {
        winner = "Game Drawn !"
    }
    console.log(totalScore)
    playerScore.innerText = winner

    resultWinner1.innerText ="Computer Score :" + totalScore["Computer Score"]
    resultWinner2.innerText ="Player Score :" + totalScore["Player Score"]

}

const clickedItem = document.querySelectorAll(".rpsButton")

const playerScore = document.getElementById("player-score")
const resultWinner1 = document.getElementById("result");
const resultWinner2 = document.getElementById("hands");




function onClickRPS(playerChoice) {
    // console.log({playerChoice})
    let computerChoice = getComputerChoice();
    // console.log({computerChoice})
    const result = getResult(playerChoice,computerChoice);
    // console.log({result})
    
    showResult(result,playerChoice,computerChoice)
    
    
    
    


}

function playGame() {
    clickedItem.forEach((item) => {
        item.onclick = () => {

            onClickRPS(item.value)

        };
    })
}

playGame()