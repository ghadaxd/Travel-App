import "regenerator-runtime/runtime";
const getCityLatLon = require("../src/server/getCityLatLon");

describe("City Lat Lon API", () => {
  test("The function is defined", () => {
    expect(getCityLatLon).toBeDefined();
  });
});
