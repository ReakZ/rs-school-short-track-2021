/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = matrix.map((x) => x.map(() => 0));
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y - 1] && matrix[y - 1][x] === true) {
        result[y][x] += 1;
      }
      if (matrix[y - 1] && matrix[x - 1] && matrix[y - 1][x - 1] === true) {
        result[y][x] += 1;
      }
      if (matrix[y + 1] && matrix[y + 1][x] === true) {
        result[y][x] += 1;
      }
      if (matrix[y + 1] && matrix[x + 1] && matrix[y + 1][x + 1] === true) {
        result[y][x] += 1;
      }
      if (
        matrix[y + 1]
        && matrix[y + 1][x - 1]
        && matrix[y + 1][x - 1] === true
      ) {
        result[y][x] += 1;
      }

      if (
        matrix[y - 1]
        && matrix[y - 1][x + 1]
        && matrix[y - 1][x + 1] === true
      ) {
        result[y][x] += 1;
      }
      if (matrix[y][x - 1] && matrix[y][x - 1] === true) {
        result[y][x] += 1;
      }

      if (matrix[y][x + 1] && matrix[y][x + 1] === true) {
        result[y][x] += 1;
      }
    }
  }

  return result;
  // throw new Error('Not implemented');
}

module.exports = minesweeper;
