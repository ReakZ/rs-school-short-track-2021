/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indices = [];
  const array = [...arr];
  const element = -1;
  let idx = array.indexOf(element);
  function sorting(a, b) {
    if (a === -1 || b === -1) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
  while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  const meh = array.filter((x) => x !== -1);
  const rr = meh.sort(sorting);
  indices.forEach((x) => {
    rr.splice(x, 0, -1);
  });
  return rr;
}

module.exports = sortByHeight;
