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
 *['doc', 'doc', 'image', 'doc(1)', 'doc']), ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
 */
function renameFiles(names) {
  if (names.length === 0) return [];

  const result = [...names];
  for (let index = 0; index < result.length; index++) {
    for (let index2 = index; index2 > 0; index2--) {
      if (result[index] === result[index2 - 1]) {
        if (result[index2][result[index2].length - 1] === ')') {
          const num = result[index2][result[index2].length - 2];
          result[index] = `${result[index]}(${
            parseInt(num, 10) + 1
          })`;
        } else {
          result[index] = `${result[index]}(1)`;
        }
      }
    }
  }
  return result;
}

module.exports = renameFiles;
