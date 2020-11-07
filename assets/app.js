let apiKey = "30da43373157d45ad4440e9c0dc3b9d0"
let cityName = "oakland"
let lastCity = ""
let fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey
let currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial"
let currentCity = document.querySelector("#city")
let currentCityTemp = document.querySelector("#temp")
let currentCityHumid = document.querySelector("#humidity")
let currentCityWind = document.querySelector("#windSpeed")
let currentCityUv = document.querySelector("#uvIndex")

fetchCurrent()
fetchFiveDay()

function fetchCurrent() {
fetch(currentUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    currentCity.innerHTML = data.name + ": " + new Date().toLocaleString() 
    currentCityTemp.innerHTML = "Temperature: " + data.main.temp + " °F"
    currentCityHumid.innerHTML = "Humidity: " + data.main.humidity + "%"
    currentCityWind.innerHTML = "Wind Speed: " + data.wind.speed + " MPH"
    currentCityUv.innerHTML = "UV Index: " + latitude + longitude
    });
};


function fetchFiveDay() {
    fetch(fiveDayUrl)
      .then(function (response) {
        return response.json();
        
      })
      .then(function (data) {
        console.log("five day", data);
      
      });
    };
    
    let uvIndexUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&APPID=" + apiKey
    let latitude = cityName.data.coord.lat
    let longitude = cityName.data.coord.lon
    
    fetch(uvIndexUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("UV", data);
      
    });
    

