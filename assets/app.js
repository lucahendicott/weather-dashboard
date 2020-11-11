//set up some loval varbs
let apiKey = "30da43373157d45ad4440e9c0dc3b9d0"
let cityNameInput = document.querySelector("#cityInput")
let submitCityInput = document.querySelector("#submitCity")
let currentCity = document.querySelector("#city")
let currentCityTemp = document.querySelector("#temp")
let currentCityHumid = document.querySelector("#humidity")
let currentCityWind = document.querySelector("#windSpeed")
let currentCityUv = document.querySelector("#uvIndex")
let dayOneDate = document.querySelector("#cityOne5")
let dayOneTemp = document.querySelector("#tempOne5")
let dayOneHumid = document.querySelector("#humidityOne5")
let dayTwoDate = document.querySelector("#cityTwo5")
let dayTwoTemp = document.querySelector("#tempTwo5")
let dayTwoHumid = document.querySelector("#humidityTwo5")
let dayThreeDate = document.querySelector("#cityThree5")
let dayThreeTemp = document.querySelector("#tempThree5")
let dayThreeHumid = document.querySelector("#humidityThree5")
let dayFourDate = document.querySelector("#cityFour5")
let dayFourTemp = document.querySelector("#tempFour5")
let dayFourHumid = document.querySelector("#humidityFour5")
let dayFiveDate = document.querySelector("#cityFive5")
let dayFiveTemp = document.querySelector("#tempFive5")
let dayFiveHumid = document.querySelector("#humidityFive5")
let searchHistory = document.querySelector("#searchHistory")


fetchCurrent()
fetchFiveDay()

// function fetching the current day weather and appending those values to the HTML content
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

// add event listener to the search button and display the values for the fetch functions called inside
 submitCityInput.addEventListener("click", function(e){
   e.preventDefault()
   localStorage.setItem("search",JSON.stringify(cityNameInput.value))
  fetchCurrent(cityNameInput.value)
  fetchFiveDay(cityNameInput.value)
  appendHistory()
 })

// function fetching 5 day url and appending the values to the HTML content
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
        dayOneTemp.innerHTML = "Temerature: " + data.list[4].main.temp + " °F"
        dayOneHumid.innerHTML = "Humidity: " + data.list[4].main.humidity + "%"
        dayTwoDate.innerHTML = new Date(data.list[12].dt_txt).toLocaleString() 
        dayTwoTemp.innerHTML = "Temerature: " + data.list[12].main.temp + " °F"
        dayTwoHumid.innerHTML = "Humidity: " + data.list[12].main.humidity + "%"
        dayThreeDate.innerHTML = new Date(data.list[20].dt_txt).toLocaleString() 
        dayThreeTemp.innerHTML = "Temerature: " + data.list[20].main.temp + " °F"
        dayThreeHumid.innerHTML = "Humidity: " + data.list[20].main.humidity + "%"
        dayFourDate.innerHTML = new Date(data.list[28].dt_txt).toLocaleString() 
        dayFourTemp.innerHTML = "Temerature: " + data.list[28].main.temp + " °F"
        dayFourHumid.innerHTML = "Humidity: " + data.list[28].main.humidity + "%"
        dayFiveDate.innerHTML = new Date(data.list[36].dt_txt).toLocaleString() 
        dayFiveTemp.innerHTML = "Temerature: " + data.list[36].main.temp + " °F"
        dayFiveHumid.innerHTML = "Humidity: " + data.list[36].main.humidity + "%"
      });
    };

    //appending saved city searches to an input form with click event listener to retrive their info on click
    function appendHistory() {
      let getSearchHistory = JSON.parse(localStorage.getItem("search"))
      searchHistory.innerHTML = "";
      for (let i=0; i < getSearchHistory.length; i++) {
          let savedCity = document.createElement("input");
          savedCity.setAttribute("class", "form-control d-block bg-white");
          savedCity.setAttribute("readonly", true);
          savedCity.setAttribute("type", "text");
          savedCity.setAttribute("value", getSearchHistory);
          savedCity.addEventListener("click",function() {
              fetchCurrent()
              fetchFiveDay()
          })
          searchHistory.appendChild(savedCity);
      }
  }
    

  
    // let uvIndexUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&APPID=" + apiKey
    // let latitude = cityNameInput.value
    // let longitude = cityNameInput.value
    
    // fetch(uvIndexUrl)
    // .then(function (response) {
    //   return response.json();
    // })
    // .then(function (data) {
    //   console.log("UV", data);
      
    // });
    

