// https://dog.ceo/api/breeds/image/random

const image = document.getElementById("profilePicture")
const profileDetails = document.getElementById("profile")
const reload = document.getElementById("clear")
const search = document.getElementById("search")
const searchInput = document.getElementById("input")

const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

reload.onclick =() =>{
    console.log("clicked")
    const randomHero1 = randomHero();
    getRandomHero(randomHero1)

}
search.onclick = () => {
    console.log(searchInput.value)
    getSearchedHero(searchInput)


}
    const getRandomHero = (id) => {
        fetch(`${BASE_URL}/${id}`)
            .then(response => response.json())
            .then(json => {
                image.innerHTML = `<img src="${json.image.url}">`
                // profileDetails.innerText = json
            })
    }

    function randomHero() {
        return Math.floor(Math.random() * 700)

    }

    const getSearchedHero = (name) => {
        fetch(`${BASE_URL}/search/${name}`)
            .then(response => response.json())
            .then(json => {
                // image.innerHTML = `<img src="${json.image.url}">`
                console.log(json)
            });

    }

