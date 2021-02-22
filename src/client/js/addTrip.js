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

const addTripFormValidation = () => {
  let destination = document.getElementById("destination").value;

  // clean up the text
  destination = destination.trim().toLowerCase();
  const pattern = /([\/\\0-9()!@#%^&*?><":|~_-])+/;
  const checkFlag = pattern.test(destination);
  const errorMSG = document.getElementById("destination-error");

  if (checkFlag) {
    //found error, then show an error msg
    errorMSG.innerHTML =
      "Use words only without numbers or any special character.";
  } else {
    errorMSG.innerHTML = "";
    return true;
  }
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

document
  .getElementById("add-trip-btn")
  .addEventListener("click", addTripFormValidation);
