/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  const array = str.split('');
  const s = [array[0]];
  const result = [s];
  let count = 0;
  for (let index = 1; index < array.length; index++) {
    if (array[index - 1] === array[index]) {
      result[count].push(array[index]);
    } else {
      count += 1;
      result.push([array[index]]);
    }
  }
  let res = '';
  result.forEach((x) => {
    res += x.length > 1 ? `${x.length}${x[0]}` : `${x[0]}`;
  });
  return res;
}

module.exports = encodeLine;
