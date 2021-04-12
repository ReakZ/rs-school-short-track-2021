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
function deleteDigit(n) {
  const arr = [0];
  const str = n.toString();
  for (let index = 0; index < str.length; index++) {
    arr.push(parseInt(str.replace(str[index], ''), 10));
  }
  return Math.max.apply(null, arr);
}

module.exports = deleteDigit;
