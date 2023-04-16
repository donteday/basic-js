const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.separator === undefined ? options.separator = '+' : options.separator = options.separator;
  options.addition === undefined ? options.addition = '' : options.addition = options.addition;
  options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 0 : options.additionRepeatTimes = options.additionRepeatTimes;
  options.additionSeparator === undefined ? options.additionSeparator = '|' : options.additionSeparator = options.additionSeparator;
  
  let additonalStr = options.addition;

  if (options.additionRepeatTimes > 0) {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
      additonalStr += options.additionSeparator + options.addition;
      }
  }

  let newStr = str + additonalStr;

  if (options.repeatTimes > 0) {        
      for (let i = 1; i < options.repeatTimes; i++) {
          newStr += options.separator + str + additonalStr;
      }
  }
  return newStr;
}

module.exports = {
  repeater
};
