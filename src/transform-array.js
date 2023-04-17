const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let newArr = [];
  if (arr[0] === '--discard-prev' || arr[0] === '--double-prev' ) {
    arr = arr.slice(1);
  } else if (arr[arr.length - 1] === '--discard-next' || arr[arr.length - 1] === '--double-next') {
    arr = arr.slice(0, arr.length - 1);
  }

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-next') {
      i += 1;
    } else if (arr[i+1] === '--discard-prev') {
      i += 1;
    } else if (arr[i] === '--double-next') {
      newArr.push(arr[i+1]);
    } else if (arr[i] === '--double-prev') {
      newArr.push(arr[i-1]);
    } else if (arr[i+1] !== '--discard-prev')  newArr.push(arr[i]);
    else newArr.push(arr[i]);
  }
  return newArr;
}

module.exports = {
  transform
};
