const getCityLatLon = (city, res) => {
  const axios = require("axios");

  // for testing
  const response = {
    totalResultsCount: 7825,
    geonames: [
      {
        adminCode1: "ENG",
        lng: "-0.12574",
        geonameId: 2643743,
        toponymName: "London",
        countryId: "2635167",
        fcl: "P",
        population: 7556900,
        countryCode: "GB",
        name: "London",
        fclName: "city, village,...",
        adminCodes1: [Object],
        countryName: "United Kingdom",
        fcodeName: "capital of a political entity",
        adminName1: "England",
        lat: "51.50853",
        fcode: "PPLC",
      },
    ],
  };

  return res.send(response);

  //   return axios
  //     .get("http://api.geonames.org/searchJSON", {
  //       params: {
  //         q: city,
  //         maxRows: 1,
  //         username: process.env.GEONAMES_USERNAME,
  //       },
  //     })
  //     .then((response) => {
  //       // in case of success (200)
  //       console.log(response.data);
  //       return res.send(response.data);
  //     })
  //     .catch((error) => {
  //       // in case of failure
  //       if (error.response) {
  //         // The request was made and the server responded with a status code
  //         // that falls out of the range of 2xx
  //         console.log(error.response.statusText);
  //         return res
  //           .status(error.response.status)
  //           .send(error.response.status + " (" + error.response.statusText + ")");
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //         // http.ClientRequest in node.js
  //         console.log(error.request);
  //         return res.status(404).send(error.request);
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.log(error.message);
  //         return res.status(404).send(error.message);
  //       }
  //     });
};

module.exports = getCityLatLon;
