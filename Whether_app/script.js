const whetherInput = document.getElementById("whetherInput");


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

