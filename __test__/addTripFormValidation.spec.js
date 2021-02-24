import "regenerator-runtime/runtime";
import { addTripFormValidation } from "../src/client/js/addTrip";

describe("Testing form validation", () => {
  test("The function is defined", () => {
    expect(addTripFormValidation).toBeDefined();
  });

  test("Destination input accepts only strings", () => {
    document.body.innerHTML = `
    <section id="add-trip-form">
        <form class="card">
          <h1>Add Trip</h1>
          <div id="destination-error" class="error"></div>
          <input
            id="destination"
            type="text"
            placeholder="Traveling to"
            required
          />
          <input
            id="departure-date"
            type="date"
            min="today"
            placeholder="Departing in"
            required
          />
          <button id="add-trip-btn" class="btn primary-btn">Add</button>
          <a id="hide-add-trip-form" href="#">
            <img
              src="../assets/cancel.svg"
              alt="Cancel icon"
              width="35"
              height="35"
              id="cancel-add-trip"
            />
          </a>
        </form>
      </section>
    `;

    const event = new Event("click");
    const city = " London     !";
    const departureDate = "26-02-2021";

    addTripFormValidation(event, city, departureDate);

    const errorMSG = document.getElementById("destination-error");

    expect(errorMSG.textContent).toEqual(
      "Use words only without numbers or any special character."
    );
  });
});
