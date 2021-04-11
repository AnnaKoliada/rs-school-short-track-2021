/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let summa;
  function sum(arr) {
    summa = 0;
    summa = arr.reduce((s, i) => +s + +i, 0);
    let arr2 = [];
    if (summa >= 10) {
      arr2 = String(summa).split('');
      sum(arr2);
    }
    return summa;
  }
  let arr = [];
  arr = String(n).split('');
  sum(arr);
  return summa;
}

module.exports = getSumOfDigits;
