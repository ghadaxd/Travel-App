/*
 *
 * Global vars
 *
 */

let trips = [];
const trip = {
  id: Math.floor(Math.random() * 100),
  city: "",
  departureDate: "",
  countdown: 00,
  weatherInfo: {},
  imageURL: "",
};

/*
 *
 * Main Functions
 *
 */

const showAddTripForm = () => {
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
    .get("http://localhost:9090/cityLatLon?city=" + city)
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

const addTrip = async (event) => {
  const city = document.getElementById("destination").value;
  const departureDate = document.getElementById("departure-date").value;

  // Validate form
  addTripFormValidation(event, city, departureDate);
  // Get the countdown of the trip.
  const countdown = getCountdown(departureDate);
  // Get Lat and Lon of the city.
  const cityLatLon = await getCityLatLon(city);
  console.log(cityLatLon);
  // Get weather info for that city.
  // Get an image for that city.
  // Update the page with the new information.

  // Trip object
  // const trip = {
  //   id: Math.floor(Math.random() * 100),
  //   city,
  //   departureDate,
  //   countdown,
  //   weatherInfo: {},
  //   imageURL: "",
  // };
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
