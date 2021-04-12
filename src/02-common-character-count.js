/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const obj = {};
  let sum = 0;
  const sString1 = s1.split('');
  const sString2 = s2.split('');
  sString1.forEach((element) => {
    if (obj[element]) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  });

  sString2.forEach((element) => {
    if (obj[element] > 0) {
      obj[element] -= 1;
      sum += 1;
    }
  });
  return sum;
}

module.exports = getCommonCharacterCount;
