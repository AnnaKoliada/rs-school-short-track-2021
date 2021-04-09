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
  let arr = [];
  arr = str.split('');
  const result = [];
  let el = 1;
  for (let i = 0; i < arr.length;) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
    if (arr[i] === arr[i + 1]) {
      el++;
      let j = i;
      for (j = i; j < arr.length; j++) {
        if (arr[j + 1] === arr[j + 2]) {
          el++;
          i++;
        } else break;
      }
      i++;
      result.push(el + arr[i]);
    }
    i++;
    el = 1;
  } return result.join('');
}

module.exports = encodeLine;
