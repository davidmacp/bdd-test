const expect = require('chai').expect

/**
 * Check the content of a cookie against a given value
 * @param  {String}   name          The name of the cookie
 * @param  {String}   falseCase     Whether or not to check if the value matches
 *                                  or not
 * @param  {String}   expectedValue The value to check against
 */
module.exports = function (name, falseCase, expectedValue) {
  if (!this.browser) {
    return
  }

    /**
     * The cookie retrieved from the this.browser object
     * @type {Object}
     */
  const cookie = this.browser.getCookie(name)

  expect(cookie.name).to.equal(
        name,
        `no cookie found with the name "${name}"`
    )

  if (falseCase) {
    expect(cookie.value).to.not
            .equal(
                expectedValue,
                `expected cookie "${name}" not to have value "${expectedValue}"`
            )
  } else {
    expect(cookie.value).to
            .equal(
                expectedValue,
                `expected cookie "${name}" to have value "${expectedValue}"` +
                ` but got "${cookie.value}"`
            )
  }
}
