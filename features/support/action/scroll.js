/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
module.exports = function (selector) {
  if (!this || !this.browser) {
    return
  }

  this.browser.scroll(selector)
}
