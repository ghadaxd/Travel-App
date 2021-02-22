const getCurrentWeather = (latLon, res) => {
  const axios = require("axios");
  const latLonJSON = JSON.parse(latLon);

  const response = {
    data: [
      {
        rh: 78,
        pod: "n",
        lon: -78.64,
        pres: 1002.7,
        timezone: "America/New_York",
        ob_time: "2021-02-22 10:10",
        country_code: "US",
        clouds: 99,
        ts: 1613988600,
        solar_rad: 0,
        state_code: "NC",
        city_name: "Raleigh",
        wind_spd: 0.9,
        wind_cdir_full: "east",
        wind_cdir: "E",
        slp: 1013,
        vis: 5,
        h_angle: -90,
        sunset: "23:03",
        dni: 0,
        dewpt: -2,
        snow: 0,
        uv: 0,
        precip: 0,
        wind_dir: 95,
        sunrise: "11:52",
        ghi: 0,
        dhi: 0,
        aqi: 42,
        lat: 35.77,
        weather: {
          icon: "c03d",
          code: 803,
          description: "Broken clouds",
        },
        datetime: "2021-02-22:10",
        temp: 1.4,
        station: "1327W",
        elev_angle: -23.95,
        app_temp: 1,
      },
    ],
    count: 1,
  };

  return res.send(response.data);

  //   return axios
  //     .get("https://api.weatherbit.io/v2.0/current", {
  //       params: {
  //         key: process.env.WEATHER_API_KEY,
  //         lat: latLonJSON.lat,
  //         lon: latLonJSON.lon,
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

module.exports = getCurrentWeather;
