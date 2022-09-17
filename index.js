const factor = require("../utilities/factorial/index");
const ratio = require("../utilities/ratio/index");

let a = 3;
let b = 5;
let c = 8;

const ratioFactorial = () => {
  return [{ ratio: ratio(2, 4), factorial: factor(4) }];
};

module.exports = ratioFactorial;
