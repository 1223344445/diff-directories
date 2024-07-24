const peopleNames = require('../country/state/city/index')
const getFirstNames = require('../utilities/utils/index')

const getPeopleInCity = peopleNames => {
  return getFirstNames(peopleNames);
};
let firstNames=getFirstNames(peopleNames);
console.log(firstNames);
module.exports = getPeopleInCity;
