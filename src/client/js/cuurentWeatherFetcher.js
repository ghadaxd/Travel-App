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
    sayHiImg.src = "src/client/assets/sun.svg";
  } else if (currentHour >= 12 && currentHour <= 17) {
    // Good Afternoon 12-17
    sayHiDiv.innerHTML = "Good Afternoon";
    sayHiImg.src = "src/client/assets/sunset.svg";
  } else {
    // Good Evening 18-23
    sayHiDiv.innerHTML = "Good Evening";
    sayHiImg.src = "src/client/assets/night.svg";
  }
  console.log(currentHour);
};

/*
 *
 * Set up Events
 *
 */

document.addEventListener("DOMContentLoaded", sayHi);
