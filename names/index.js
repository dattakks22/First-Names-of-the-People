let peopleList = require("../country/state/city/index.js");
let getFirstName = require("../utilities/utils/index.js");

let getPeopleInCity = (peopleList) => {
  return getFirstName(peopleList);
};
console.log(getPeopleInCity(peopleList));
module.exports = getPeopleInCity;
