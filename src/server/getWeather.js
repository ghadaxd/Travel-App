const getWeather = (latLon, res, type) => {
  const axios = require("axios");
  const latLonJSON = JSON.parse(latLon);

  const apiEndPoint = type === "current" ? type : type + "/daily";

  // testing data for current
  const currentResponse = {
    data: [
      {
        rh: 32,
        pod: "n",
        lon: 46.72,
        pres: 946.6,
        timezone: "Asia/Riyadh",
        ob_time: "2021-02-23 16:00",
        country_code: "SA",
        clouds: 47,
        ts: 1614096000,
        solar_rad: 0,
        state_code: "10",
        city_name: "Riyadh",
        wind_spd: 5.1,
        wind_cdir_full: "east",
        wind_cdir: "E",
        slp: 1019,
        vis: 5,
        h_angle: -90,
        sunset: "14:53",
        dni: 0,
        dewpt: 3.7,
        snow: 0,
        uv: 0,
        precip: 0,
        wind_dir: 80,
        sunrise: "03:19",
        ghi: 0,
        dhi: 0,
        aqi: 87,
        lat: 24.69,
        weather: {
          icon: "c03d",
          code: 803,
          description: "Broken clouds",
        },
        datetime: "2021-02-23:16",
        temp: 21,
        station: "OERY",
        elev_angle: -16.19,
        app_temp: 20,
      },
    ],
    count: 1,
  };

  // testing data for future
  const forcastResponse = {
    data: [
      {
        valid_date: "2017-04-01",
        ts: 1503954000,
        datetime: "2017-04-01",
        wind_gust_spd: 16.7,
        wind_spd: 6.4,
        wind_dir: 45,
        wind_cdir: "NE",
        wind_cdir_full: "northeast",
        temp: 25,
        max_temp: 30,
        min_temp: 26,
        high_temp: 30,
        low_temp: 24.5,
        app_max_temp: 30.64,
        app_min_temp: 23.64,
        pop: 0,
        precip: 0,
        snow: 0,
        snow_depth: 0,
        slp: 1017,
        pres: 1003.5,
        dewpt: 17.8,
        rh: 64.3,
        weather: {
          icon: "c04d",
          code: "804",
          description: "Overcast clouds",
        },
        pod: "d",
        clouds_low: 25,
        clouds_mid: 100,
        clouds_hi: 50,
        clouds: 100,
        vis: 10,
        max_dhi: 178,
        uv: 2,
        moon_phase: 0.99,
        moon_phase_lunation: 0.48,
        moonrise_ts: 1530341260,
        moonset_ts: 1530351260,
        sunrise_ts: 1530321260,
        sunset_ts: 1530391260,
      },
    ],
    city_name: "Raleigh",
    lon: "-78.63861",
    timezone: "America/New_York",
    lat: "35.7721",
    country_code: "US",
    state_code: "NC",
  };

  return type === "current"
    ? res.send(currentResponse)
    : res.send(forcastResponse);

  // return axios
  //   .get(`https://api.weatherbit.io/v2.0/${apiEndPoint}`, {
  //     params: {
  //       key: process.env.WEATHER_API_KEY,
  //       lat: latLonJSON.lat,
  //       lon: latLonJSON.lon,
  //     },
  //   })
  //   .then((response) => {
  //     // in case of success (200)
  //     return res.send(response.data);
  //   })
  //   .catch((error) => {
  //     // in case of failure
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       console.log(error.response.statusText);
  //       return res
  //         .status(error.response.status)
  //         .send(error.response.status + " (" + error.response.statusText + ")");
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //       // http.ClientRequest in node.js
  //       console.log(error.request);
  //       return res.status(404).send(error.request);
  //     } else {
  //       // Something happened in setting up the request that triggered an Error
  //       console.log(error.message);
  //       return res.status(404).send(error.message);
  //     }
  //   });
};

module.exports = getWeather;
