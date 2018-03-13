const expect = require('chai').expect

/**
 * Check if a cookie with the given name exists
 * @param  {[type]}   name      The name of the cookie
 * @param  {[type]}   falseCase Whether or not to check if the cookie exists or
 *                              not
 */
module.exports = (name, falseCase) => {
  if (!this.browser) {
    return
  }

    /**
     * The cookie as retrieved from the this.browser
     * @type {Object}
     */
  const cookie = this.browser.getCookie(name)

  if (falseCase) {
    expect(cookie).to.equal(
            null,
            `Expected cookie "${name}" not to exists but it does`
        )
  } else {
    expect(cookie).to.not.equal(
            null,
            `Expected cookie "${name}" to exists but it does not`
        )
  }
}
