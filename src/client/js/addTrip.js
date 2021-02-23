import { getWeather } from "./currentWeatherFetcher";
/*
 *
 * Global vars
 *
 */
let trips = [];

/*
 *
 * Main Functions
 *
 */

export const showAddTripForm = () => {
  const addTripForm = document.getElementById("add-trip-form");

  // set the date input
  const departureDate = document.getElementById("departure-date");
  const today = new Date();
  let month =
    today.getMonth() + 1 >= 10
      ? today.getMonth() + 1
      : "0" + (today.getMonth() + 1);
  let day = today.getDate() >= 10 ? today.getDate() : "0" + today.getDate();
  departureDate.min = today.getFullYear() + "-" + month + "-" + day;

  const getHeight = function () {
    addTripForm.style.display = "block"; // Make it visible
    var height = addTripForm.scrollHeight + "px"; // Get it's height
    addTripForm.style.display = ""; //  Hide it again
    return height;
  };

  const height = getHeight(); // Get the natural height
  addTripForm.classList.add("is-visible"); // Make the element visible
  addTripForm.style.height = height; // Update the max-height

  // Once the transition is complete, remove the inline max-height so the content can scale responsively
  window.setTimeout(function () {
    addTripForm.style.height = "";
  }, 350);
};

const hideAddTripForm = () => {
  const addTripForm = document.getElementById("add-trip-form");
  const errorMSG = document.getElementById("destination-error");
  errorMSG.innerHTML = "";
  // Give the element a height to change from
  addTripForm.style.height = addTripForm.scrollHeight + "px";

  window.setTimeout(function () {
    addTripForm.style.height = "0";
  }, 1);

  // When the transition is complete, hide it
  window.setTimeout(function () {
    addTripForm.classList.remove("is-visible");
  }, 500);
};

const addTripFormValidation = (event, city, departureDate) => {
  event.preventDefault();

  let destination = city;
  const errorMSG = document.getElementById("destination-error");

  // Check if fields are not empty
  if (!destination || !departureDate) {
    errorMSG.innerHTML = "Please, fill out these fields.";
  } else {
    // clean up the text
    destination = destination.trim().toLowerCase();
    const pattern = /([\/\\0-9()!@#%^&*?><":|~_-])+/;
    const checkFlag = pattern.test(destination);

    if (checkFlag) {
      //found error, then show an error msg
      errorMSG.innerHTML =
        "Use words only without numbers or any special character.";
    } else {
      errorMSG.innerHTML = "";
      return true;
    }
  }
};

const getCountdown = (departureDate) => {
  const today = new Date();
  const departureDateFormatted = new Date(departureDate);

  // To calculate the time difference of two dates
  const differenceInTime = departureDateFormatted.getTime() - today.getTime();

  // To calculate the no. of days between two dates
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return Math.floor(differenceInDays);
};

const getCityLatLon = (cityData) => {
  let city = cityData;
  // clean up input
  city = city.trim().toLowerCase();

  const axios = require("axios");
  return axios
    .get("http://localhost:9090/cityLatLon/" + city)
    .then((response) => {
      // in case of success (200)
      // Get city lat and lon
      let cityLatLon = { lat: "", lon: "" };
      cityLatLon.lat = response.data.geonames[0].lat;
      cityLatLon.lon = response.data.geonames[0].lng;
      // return that value
      return cityLatLon;
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

const showTrips = () => {
  const tripsLength = trips.length;
  if (tripsLength === 1) {
    const mainTripContainer = document.getElementById("main-trip-card");
    mainTripContainer.classList.remove("flex-center-col");

    mainTripContainer.innerHTML = `
  <div class='trip-preview-img'></div>
  <div id='main-trip-info'>
    <!-- <a href='#' id='delete-trip'></a> -->
    <div class='trip-info'>
      <h2 class='dist-name'>${trips[0].city}</h2>
      <h4 class='departure-date'>${trips[0].departureDate}</h4>
      <h3 class='remaining-days'>${trips[0].countdown} ${
      trips[0].countdown === 1 ? "day" : "days"
    }</h3>
     <h5 class='weather-desc'>${trips[0].weatherInfo.weather.description}.</h5>
    </div>
   <div class='current-weather-details'>
      <div class='flex-center-col'>
       <span>High</span><span>45</span>
     </div>
     <div class='flex-center-col'>
        <span>Low</span> <span>12</span>
     </div>
     <div class='flex-center-col'>
       <span>Wind</span> <span>10</span>
     </div>
     <div class='flex-center-col'>
        <span>Cloud</span> <span>13</span>
     </div>
   </div>
  </div>`;
  }
};

const formatDate = (date) => {
  const convertedDate = new Date(date);
  const month = convertedDate.getMonth() + 1;
  return (
    convertedDate.getDate() + "/" + month + "/" + convertedDate.getFullYear()
  );
};

const addTrip = async (event) => {
  const city = document.getElementById("destination").value;
  const departureDate = document.getElementById("departure-date").value;

  // Validate form
  addTripFormValidation(event, city, departureDate);

  // Get the countdown of the trip.
  const countdown = getCountdown(departureDate);

  // Get Lat and Lon of the city.
  const cityLatLon = JSON.stringify(await getCityLatLon(city));

  // Get weather info for that city.
  let weatherInfo, cityName;
  // If the trip is within a week, get current weather.
  if (countdown <= 7) {
    weatherInfo = await getWeather(cityLatLon, "current");
    cityName = weatherInfo.data[0].city_name;
  } else {
    // If it's in the future, get a predicted forecast.
    weatherInfo = await getWeather(cityLatLon, "forecast");
    cityName = weatherInfo.city_name;
  }

  // Get an image for that city.
  const imageURL = "";
  // Save the object in trips
  // Trip object
  const trip = {
    // id: Math.floor(Math.random() * 100),
    city: cityName,
    departureDate: formatDate(departureDate),
    countdown,
    weatherInfo: weatherInfo.data[0],
    imageURL,
  };
  trips.push(trip);

  // Reorder trips based on the closet trip (countdown)
  trips.sort((a, b) => {
    return a.countdown - b.countdown;
  });

  // Close add trip form
  hideAddTripForm();
  console.log(trips);
  // Show the new added trip
  showTrips();
};

/*
 *
 * Set up Events
 *
 */

document
  .getElementById("show-add-trip-btn")
  .addEventListener("click", showAddTripForm);

document
  .getElementById("hide-add-trip-form")
  .addEventListener("click", hideAddTripForm);

document.getElementById("add-trip-btn").addEventListener("click", addTrip);
