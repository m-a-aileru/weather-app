let cityDisplay = document.getElementById("city"), cityInput = document.getElementById("city-input"), city = "";
let iconDisplay = document.getElementById("icon");
let tempDisplay = document.getElementById("temp");
let descDisplay = document.getElementById("desc");

cityDisplay.textContent = "This is the city.";
iconDisplay.textContent = "This is the image representing the weather.";
tempDisplay.textContent = "This is the temperature.";
descDisplay.textContent = "This is the description of the weather.";


// API calls
function getWeather() {
  // For City  
  //location = city;
  
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=***************************`) // *************************** - obviously the key is obscured for obvious reasons
  .then(response => response.json())
  //.then(json => console.log(json))
  .then(json => cityDisplay.textContent = json.name)

  // For Temp
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=***************************`) // *************************** - obviously the key is obscured for obvious reasons
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => tempDisplay.textContent = Math.round(json.main.temp - 273.15) + '°C');

  // For Weather Description
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=***************************`) // *************************** - obviously the key is obscured for obvious reasons
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => descDisplay.textContent = json.weather[0].main);
    //.then(json => descDisplay.textContent = json.eather[0].description);

}

// Promises


// Event listeners
cityInput.addEventListener('keypress', function(e){
  if(e.key === 'Enter') {
    city = cityInput.value;
    getWeather();
    console.log(`input confirmed: ${city}`);
    cityDisplay.textContent = city;

  }
});  
