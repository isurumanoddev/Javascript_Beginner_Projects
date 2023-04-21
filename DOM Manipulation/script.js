let greenSquare = document.getElementById("green");
let purpleSquare = document.getElementById("purple");
let orangeSquare = document.getElementById("orange");
let clearButton = document.getElementById("clear");

const squares = document.querySelectorAll(".rpsButton");

const timesClicked = { "green":0,"purple":0,"orange":0,}
squares.forEach(square => {

    square.onclick = () => {
        console.log(square.value);
        timesClicked[square.value] += 1;
        square.innerText = timesClicked[square.value]
    }
});

clearButton.onclick = () => {
    squares.forEach(square =>{

        timesClicked[square.value] = 0;
        square.innerText = ""

    })
};