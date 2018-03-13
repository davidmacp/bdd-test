/**
 * Pause execution for a given number of milliseconds
 * @param  {String}   ms   Number of milliseconds to pause
 */
module.exports = function (ms) {
  if (!this || !this.browser) {
    return
  }

  /**
   * Number of milliseconds
   * @type {Int}
   */
  const intMs = parseInt(ms, 10)

  this.browser.pause(intMs)
}
