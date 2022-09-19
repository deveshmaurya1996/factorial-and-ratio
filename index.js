const factor = require("../factorial/index.js");
const ratio = require("../ratio/index.js");

let a = 4;
let b = 5;
let c = 6;

const ratioAndFactorial = (a, b, c) => {
  return { ratio: ratio(a, b), factorial: factor(c) };
};

module.exports = ratioAndFactorial;
