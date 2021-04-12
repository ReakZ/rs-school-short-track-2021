/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      let nul = false;
      if (y === 0) {
        sum += matrix[y][x];
      } else {
        for (let z = y; z > -1; z--) {
          if (matrix[z][x] === 0) {
            nul = true;
            break;
          }
        }
        if (nul === false) {
          sum += matrix[y][x];
        }
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
