/*
 *
 * Main Functions
 *
 */

const sayHi = () => {
  const currentHour = new Date().getHours();
  const sayHiDiv = document.querySelector("#saying-hi");
  const sayHiImg = document.querySelector("#current-weather-icon");
  // Good Morning 24 or 1-11
  if ((currentHour >= 1 && currentHour <= 11) || currentHour === 11) {
    sayHiDiv.innerHTML = "Good Morning";
    sayHiImg.src = "../assets/sun.svg";
  } else if (currentHour >= 12 && currentHour <= 17) {
    // Good Afternoon 12-17
    sayHiDiv.innerHTML = "Good Afternoon";
    sayHiImg.src = "../assets/sunset.svg";
  } else {
    // Good Evening 18-23
    sayHiDiv.innerHTML = "Good Evening";
    sayHiImg.src = "../assets/night.svg";
  }
};

const getUserLocation = () => {
  const axios = require("axios");
  return axios
    .get("https://extreme-ip-lookup.com/json/")
    .then((response) => {
      // in case of success (200)
      return { lat: response.data.lat, lon: response.data.lon };
    })
    .catch((error) => {
      // in case of failure
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.statusText);
        return error.response.status + " (" + error.response.statusText + ")";
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        return error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log(error.message);
        return error.message;
      }
    });
};

const getCurrentWeather = async () => {
  const latLon = JSON.stringify(await getUserLocation());
  const axios = require("axios");
  return axios
    .get("http://localhost:9090/currentWeather?latLon=" + latLon)
    .then((response) => {
      // in case of success (200)
      //   return showCurrentWeather(response.data.data[0]);
      // for testing
      return showCurrentWeather(response.data[0]);
    })
    .catch((error) => {
      // in case of failure
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.statusText);
        return error.response.status + " (" + error.response.statusText + ")";
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        return error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log(error.message);
        return error.message;
      }
    });
};

const showCurrentWeather = (currentWeatherData) => {
  document.getElementById("temperature").innerHTML =
    currentWeatherData.temp +
    "° " +
    `<img height='25' width='25' alt='${currentWeatherData.weather.description}' src='../assets/weather_icons/${currentWeatherData.weather.icon}.png' />`;
  document.getElementById("city").innerHTML = currentWeatherData.city_name;

  document.getElementById("sunrise").innerHTML = currentWeatherData.sunrise;
  document.getElementById("sunset").innerHTML = currentWeatherData.sunset;
  document.getElementById("wind").innerHTML = currentWeatherData.wind_spd;
  document.getElementById("clouds").innerHTML = currentWeatherData.clouds;
};

const fetchCurrentWeather = () => {
  sayHi();
  getCurrentWeather();
};

/*
 *
 * Set up Events
 *
 */

document.addEventListener("DOMContentLoaded", fetchCurrentWeather);
