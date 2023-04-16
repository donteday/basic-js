const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let copiesFile = {};
  let result = [];

  for (let i = 0; i < names.length; i++) {

    if (!copiesFile[names[i]]) {
      copiesFile[names[i]] = 1;
      result.push(names[i]);
    } else {
      let newName = `${names[i]}(${copiesFile[names[i]]})`;
      
      if (!copiesFile[newName]) {
        copiesFile[newName] = 1;
        copiesFile[names[i]] += 1;
        result.push(newName);
      } else {
        let suffix = copiesFile[newName];
        let nextName = `${names[i]}(${suffix + 1})`;
        copiesFile[nextName] = 1;
        copiesFile[newName] += 1;
        result.push(nextName);
      }
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
