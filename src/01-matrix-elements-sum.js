/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 0, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let array = [];
  let length = 0;
  for (let i = 0; i < matrix.length; i++) {
    length = matrix[i].length;
  }
  array = matrix.flat();
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0 && i <= length) {
      sum += array[i];
    } else if (array[i] !== 0 && i > length && array[i - length] !== 0) {
      sum += array[i];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
