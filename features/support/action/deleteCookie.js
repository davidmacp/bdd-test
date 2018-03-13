/**
 * Delete a cookie
 * @param  {String}   name The name of the cookie to delete
 */
module.exports = function (name) {
  if (!this || !this.browser) {
    return
  }

  this.browser.deleteCookie(name)
}
