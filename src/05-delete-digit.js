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
  let a = [];
  a = n.toString().split('');
  let c = 1;
  for (let i = 0; i < a.length; i++) {
    a = n.toString().split('');
    a.splice(i, 1);

    if (a.join('') > c) c = a.join('');
  }

  return +c;
}

module.exports = deleteDigit;
