// const cityWhether = document.getElementById("cityName");
// const cloud = document.getElementById("cloud");
// const country = document.getElementById("country");
// const temp = document.getElementById("temp");
// const wind = document.getElementById("wind");
// const humidity = document.getElementById("humidity");
const whetherInput = document.getElementById("whetherInput");
// const searchInput = document.getElementById("city")
// let data = {City: null, Country: "", Temp: "", Wind_Speed: "", Humidity: "", Cloud: "",}


// const searchButton = document.getElementById("Button");

const searchCity = async () => {
    const cityName = whetherInput.value;
    getWhether(cityName).then(value => console.log("value :", value))


    // console.log("cityName :", cityName)


}
const getWhether = async (city) => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=$${city}`;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '83134f5537msh46512d6c641c588p15ab8ajsn26af73dc3fc3',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };


    try {
        const response = await fetch(url, options);
        const result = await response.json();
        showWhetherData(result)
        // console.log(result)

        // console.log("City :", result.location["name"]);
        // console.log("Country :", result.location["country"]);
        // console.log("Temp :", result.current["temp_c"]);
        // console.log("Wind Speed :", result.current["wind_kph"]);
        // console.log("Humidity: :", result.current["humidity"]);
        // console.log("Cloud: :", result["current"]["condition"].text);


    } catch (error) {
        console.error(error);
    }


}

const showWhetherData = (whetherData) => {

    // console.log("whetherData : ",whetherData.location["name"])
    document.getElementById("cityName").innerText = whetherData.location["name"]
    document.getElementById("cloud").innerText = whetherData["current"]["condition"].text
    document.getElementById("country").innerText = whetherData.location["country"]
    document.getElementById("temp").innerText = whetherData.current["temp_c"]
    document.getElementById("wind").innerText = whetherData.current["wind_kph"]
    document.getElementById("humidity").innerText = whetherData.current["humidity"]

};


// cityWhether.innerText = result[0]
// cityWhether.innerText = "kegalle"
// cloud.innerText = result["current"]["condition"].text
// country.innerText = result.location["country"]
// temp.innerText = result.current["temp_c"]
// wind.innerText = result.current["wind_kph"]
// humidity.innerText = result.current["humidity"]

// data.City = result.location["name"]
// data.Country = result.location["country"]
// data.Temp = result.current["temp_c"]
// data.Wind_Speed = result.current["wind_kph"]
// data.Humidity = result.current["humidity"]
// data.Cloud = result["current"]["condition"].tex