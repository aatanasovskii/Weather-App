// api from - https://rapidapi.com/apishub/api/yahoo-weather5/

/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
// let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = async (city) => {
  //HINT: Use template literals to create a url with input and an API key
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1d795f8518msh7d0f37f5940664ap1f6779jsn6dbf9099fb41",
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(
      `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`,
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
  //CODE GOES HERE
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = async () => {
  const city = document.getElementById("city-input").value;
  console.log(city);
  const data = await getWeatherData(city);
  showWeatherData(data);
  // CODE GOES HERE
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData.current_observation.condition.temperature);
  document.getElementById("temp").innerText = parseFloat(
    (weatherData.current_observation.condition.temperature - 32) * 0.55
  ).toFixed(2);
  document.getElementById("city-name").innerText = weatherData.location.city;
  document.getElementById("weather-type").innerText =
    weatherData.current_observation.condition.text;
  document.getElementById("min-temp").innerText = parseFloat(
    (weatherData.forecasts[0].low - 32) * 0.55
  ).toFixed(2);
  document.getElementById("max-temp").innerText = parseFloat(
    (weatherData.forecasts[0].high - 32) * 0.55
  ).toFixed(2);
};
