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
  let arr = [];
  arr = s2.split('');
  return s1.split('').reduce((i, item) => {
    if (!arr.includes(item)) {
      return i;
    }
    arr.splice(arr.indexOf(item), 1);
    return i + 1;
  }, 0);
}

module.exports = getCommonCharacterCount;
