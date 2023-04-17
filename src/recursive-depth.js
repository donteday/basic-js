const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(a) {
    //let r = calculateDepth(a);
    let count = 1;
    let maxCount = 1;

    function deepCountInner(a){    
      for (let arr of a) {
        if (Array.isArray(arr) === true) {
          count ++;
          if (arr.length === 0 || arr.length === 1 && Array.isArray(arr[0]) === false) {
            count > maxCount ? maxCount = count : maxCount = maxCount;
            count = 1;
          };
          deepCountInner(arr);
        }

      }
    }
  deepCountInner(a);
  return maxCount;
  }
}

module.exports = {
  DepthCalculator
};
