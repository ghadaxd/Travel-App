const getWeather = (latLon, res, type) => {
  const axios = require("axios");
  const latLonJSON = JSON.parse(latLon);

  const apiEndPoint = type === "current" ? type : type + "/daily";

  return axios
    .get(`https://api.weatherbit.io/v2.0/${apiEndPoint}`, {
      params: {
        key: process.env.WEATHER_API_KEY,
        lat: latLonJSON.lat,
        lon: latLonJSON.lon,
      },
    })
    .then((response) => {
      // in case of success (200)
      return res.send(response.data);
    })
    .catch((error) => {
      // in case of failure
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.statusText);
        return res
          .status(error.response.status)
          .send(error.response.status + " (" + error.response.statusText + ")");
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        return res.status(404).send(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log(error.message);
        return res.status(404).send(error.message);
      }
    });
};

module.exports = getWeather;
