let apiKey = "30da43373157d45ad4440e9c0dc3b9d0"
let cityName = "oakland"
let cityNameInput = document.querySelector("#cityInput")
let submitCityInput = document.querySelector("#submitCity")
let currentCity = document.querySelector("#city")
let currentCityTemp = document.querySelector("#temp")
let currentCityHumid = document.querySelector("#humidity")
let currentCityWind = document.querySelector("#windSpeed")
let currentCityUv = document.querySelector("#uvIndex")
let dayOneDate = document.querySelector("#city5")
let dayOneTemp = document.querySelector("#temp5")
let dayOneHumid = document.querySelector("#humidity5")

fetchCurrent()
fetchFiveDay()

function fetchCurrent(cityValue) {
  if(!cityValue){
    cityValue = "oakland"
  }
  let currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&appid=" + apiKey + "&units=imperial"
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
    // currentCityUv.innerHTML = "UV Index: " + latitude + longitude
    });
};

 submitCityInput.addEventListener("click", function(e){
   e.preventDefault()
  // lastCity = cityNameInput.value
  fetchCurrent(cityNameInput.value)
  fetchFiveDay(cityNameInput.value)
 })


function fetchFiveDay(cityValue) {
  if(!cityValue){
    cityValue = "oakland"
  }
  let fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&appid=" + apiKey + "&units=imperial"
    fetch(fiveDayUrl)
      .then(function (response) {
        return response.json();
        
      })
      .then(function (data) {
        console.log("five day", data);
        dayOneDate.innerHTML = new Date(data.list[4].dt_txt).toLocaleString() 
        dayOneTemp.innerHTML = data.list[4].main.temp + " °F"
        dayOneHumid.innerHTML = data.list[4].main.humidity
      });
    };
    
    // let uvIndexUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&APPID=" + apiKey
    // let latitude = cityName.data.coord.lat
    // let longitude = cityName.data.coord.lon
    
    // fetch(uvIndexUrl)
    // .then(function (response) {
    //   return response.json();
    // })
    // .then(function (data) {
    //   console.log("UV", data);
      
    // });
    

