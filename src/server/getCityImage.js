const getCityImage = (city, res) => {
  const axios = require("axios");

  return axios
    .get("https://pixabay.com/api", {
      params: {
        key: process.env.PIXABAY_API_KEY,
        q: city,
        category: "travel",
        per_page: 3,
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

module.exports = getCityImage;
