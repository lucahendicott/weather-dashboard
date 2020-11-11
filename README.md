# Weather Dashboard
A simple weather dashboard application that displays current day weather info and a 5 day forecast for any city the user searches for.

## Under the Hood
This apps directory includes an HTML, CSS and JavaScript file. The HTML includes some basic div elements, a search input and button. 

JavaScript is whats mainly powering this app, using calls to fetch info from Open Weather API. It uses 3 API's. One to fetch the current days weather info, one for a 5 day forecast and one for the current day UV index. Within in the current days api request I added the proper items within the API using innerHTML to display the content through the HTML.

I had some struggles with the loacal storage and appending the stored citry searches to an input form. I also had some struggles with the UV index API call and displaying the weather icons. It's definitely a project I will keep working on and refactoring to learn as much as I can on this one!

![Screen Shot 2020-11-10 at 6 44 17 PM](https://user-images.githubusercontent.com/70814349/98759084-24cd7800-2385-11eb-90d2-2c4658e15efa.png)


## Credits
[Basic weather Dash help](https://bithacker.dev/fetch-weather-openweathermap-api-javascript)<br>
[5 day forecast API](https://openweathermap.org/forecast5#data)<br>
[UV Index API](https://openweathermap.org/api/uvi)<br>
[Current Weather API](https://openweathermap.org/current)<br>
[JavaScript Date](www.youtube.com/watch?v=yalxT0PEx8c)<br>

## Deployed APP
[Check the Weather!](https://lucahendicott.github.io/weather-dashboard/)
