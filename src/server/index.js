const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
var path = require("path");
const app = express();

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// app.use(express.static("dist"));
app.use(express.static(path.resolve("src/client")));

app.get("/", function (req, res) {
  // res.sendFile("dist/index.html");
  res.sendFile(path.resolve("src/client/views/index.html"));
});

const getCurrentWeather = require("./getCurrentWeather.js");
app.get("/currentWeather/:latLon?", function (req, res) {
  getCurrentWeather(req.query.latLon, res);
});

const getCityLatLon = require("./getCityLatLon.js");
app.get("/cityLatLon/:city?", function (req, res) {
  getCityLatLon(req.query.city, res);
});

// designates what port the app will listen to for incoming requests
app.listen(9090, function () {
  console.log("Listening on port 9090 for localhost!");
});
