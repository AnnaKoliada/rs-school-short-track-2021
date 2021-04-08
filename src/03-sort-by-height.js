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
  const number = [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) number.push(arr[i]);
  }
  number.sort((a, b) => a - b);
  if (number.length === 0) return arr;
  for (let j = 0; j < number.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) {
        result.push(arr[i]);
      } else {
        result.push(number[j]);
        number.splice(j, 1);
      }
    }
  }

  return result;
}

module.exports = sortByHeight;
