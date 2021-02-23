// Fetch current weather
import { fetchCurrentWeather } from "./js/currentWeatherFetcher";
export { fetchCurrentWeather };

// Add trip
import { showAddTripForm } from "./js/addTrip";
export { showAddTripForm };

// scss files.
import "./styles/style.scss";

// Loading favicon
import "./favicon/android-chrome-192x192.png";
import "./favicon/android-chrome-512x512.png";
import "./favicon/apple-touch-icon.png";
import "./favicon/favicon-16x16.png";
import "./favicon/favicon-32x32.png";
import "./favicon/favicon.ico";
import "./favicon/site.webmanifest";

// Loading assets
import "./assets/sun.svg";
import "./assets/sunset.svg";
import "./assets/night.svg";
import "./assets/wind.svg";
import "./assets/clouds.svg";
import "./assets/cancel.svg";

// Loading weather icons
function importAll(r) {
  return r.keys().map(r);
}
importAll(require.context("./assets/weather_icons", false, /\.(png)$/));
