let greenSquare = document.getElementById("green");
let purpleSquare = document.getElementById("purple");
let orangeSquare = document.getElementById("orange");
let clearButton = document.getElementById("clear");

const sqaures = document.querySelectorAll(".colorSquares");

const clickTimes = { purple: 0, green:0, orange: 0}
sqaures.forEach(square => {

    square.onclick = () => {
        console.log(square.value);
        clickTimes[square.value] += 1;
        square.innerText = clickTimes[square.value]
    };

});

clearButton.onclick = () => clearScore()

function clearScore() {
    console.log("clear")
    sqaures.forEach(square => {
        square.innerHTML = ""
        clickTimes[square.value] = 0;
    });
}