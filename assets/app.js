let apiKey = "30da43373157d45ad4440e9c0dc3b9d0"
let cityName = "oakland"
let fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey
let currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
let currentCity = document.querySelector("#city")
let currentCityTemp = document.querySelector("#temp")
let currentCityHumid = document.querySelector("#humidity")
let currentCityWind = document.querySelector("#windSpeed")
let currentCityUv = document.querySelector("#uvIndex")

fetchCurrentRequest()
function fetchCurrentRequest() {
fetch(currentUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log("city name:", data.name);
    console.log("city temp:", data.main.temp);
    console.log("city humidity:", data.main.humidity);
    currentCity.innerHTML = data.name + new Date().toDateString()
    currentCityTemp.innerHTML = "Temperature: " + data.main.temp
  });
};

function fetchFiveDayRequest() {
    fetch(fiveDayUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("five day", data);
      });
    };


