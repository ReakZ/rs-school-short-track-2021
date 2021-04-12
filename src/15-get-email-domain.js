/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const reg = /@[a-zA-z0-9-]+.[a-zA-z0-9]+/g;
  const result = email.match(reg)[0].substr(1);
  return result;
}

module.exports = getEmailDomain;
