/*
 *
 * Main Functions
 *
 */

const showAddTripForm = () => {
  const addTripForm = document.getElementById("add-trip-form");

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

// Hide an element
const hideAddTripForm = () => {
  const addTripForm = document.getElementById("add-trip-form");

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

document
  .getElementById("show-add-trip-btn")
  .addEventListener("click", showAddTripForm);

document
  .getElementById("hide-add-trip-form")
  .addEventListener("click", hideAddTripForm);
