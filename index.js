let arrayList = require("../country/state/city/index.js");

let firstName = require("../utilities/utils/index.js");

const getPeopleInCity = (arrayList) => {
  const res = firstName(arrayList);
  return res;
};

module.exports = getPeopleInCity;
