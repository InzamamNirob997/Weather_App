const apikey = "0e883e8995e85e617434f5c9510c837e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input")
const SearchBTN = document.querySelector(".search button")
const weatherICON = document.querySelector(".weather-icon")



async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    var data = await response.json()
  


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+ "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"


    if(data.weather[0].main == "clouds"){
        weatherICON.src = "images/clouds.png";

    }
    else if (data.weather[0].main == "Clear"){
        weatherICON.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherICON.src = "images/drizzle.png";

    }
    else if (data.weather[0].main == "Mist"){
        weatherICON.src = "images/mist.png";

    }
    else if (data.weather[0].main == "Rain"){
        weatherICON.src = "images/rain.png";

    }
    else if (data.weather[0].main == "Snow"){
        weatherICON.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";

    
}

SearchBTN.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})
