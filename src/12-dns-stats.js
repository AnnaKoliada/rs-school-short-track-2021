/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const object = {};
  const arr = [...domains];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('.').reverse();
    arr[i] = `.${arr[i].join('.')}`;
    let a = '';
    for (let j = 1; j <= arr[i].length; j++) {
      if (arr[i][j] === '.') {
        a = arr[i].slice(0, arr[i].indexOf(arr[i][j], j));
        if (a in object) {
          object[a]++;
        } else {
          object[a] = 1;
        }
      }
      if (j === arr[i].length) {
        a = arr[i].slice(0, arr[i][j]);
        if (a in object) {
          object[a]++;
        } else {
          object[a] = 1;
        }
      }
    }
  }

  return object;
}

module.exports = getDNSStats;
