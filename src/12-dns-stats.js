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
  const obj = {};
  for (let x = 0; x < domains.length; x++) {
    const arr = [];
    const arrayDomain = domains[x].split('.').reverse();

    for (let y = 0; y < arrayDomain.length; y++) {
      arr.push(arrayDomain[y]);
      const str = `.${arr.join('.')}`;
      if (str in obj) {
        obj[str] += 1;
      } else {
        obj[str] = 1;
      }
    }
  }

  return obj;
}

module.exports = getDNSStats;
