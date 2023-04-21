// https://dog.ceo/api/breeds/image/random

const image = document.getElementById("dogImage")
const reload = document.getElementById("clear")

const newDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())

        .then(json => {
            image.innerHTML = `<img src="${json.message}">`
        });


}


reload.onclick = () => newDog()

