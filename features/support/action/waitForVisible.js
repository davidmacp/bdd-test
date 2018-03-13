/**
 * Wait for the given element to become visible
 * @param  {String}   elem      Element selector
 * @param  {String}   falseCase Whether or not to expect a visible or hidden
 *                              state
 *
 * @todo  merge with waitfor
 */
module.exports = function (elem, falseCase) {
  if (!this || !this.browser) {
    return
  }

  /**
   * Maximum number of milliseconds to wait for
   * @type {Int}
   */
  const ms = 10000

  this.browser.waitForVisible(elem, ms, !!falseCase)
}
