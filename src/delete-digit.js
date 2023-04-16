const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(digits) {
  let digitsArray = String(digits).split('');;
  let maxNum = -999999;
  for (let i = 0; i < digitsArray.length; i++) {
    let newDigits = digitsArray.slice(0, i).concat(digitsArray.slice(i + 1)).join('');
    maxNum = newDigits > maxNum ? newDigits : maxNum;
  }
  return Number(maxNum);
}

module.exports = {
  deleteDigit
};
