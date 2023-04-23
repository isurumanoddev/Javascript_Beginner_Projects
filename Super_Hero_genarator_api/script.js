// https://dog.ceo/api/breeds/image/random

const image = document.getElementById("profilePicture")
const profileDetails = document.getElementById("profile")
const reload = document.getElementById("clear")
const search = document.getElementById("search")
const searchInput = document.getElementById("input")

const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`


const getRandomHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {

            image.innerHTML = `<img src="${json.image.url}" alt="">`

        })
}

function randomHero() {
    return Math.floor(Math.random() * 700)

}

const getSearchedHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.result[0];
            image.innerHTML = `<img src="${hero.image.url}">`
        });

}

reload.onclick = () => getRandomHero(randomHero)
search.onclick = () => {
    const searchValue = searchInput.value;
    getSearchedHero(`${searchValue}`)
    console.log(searchValue)
}
