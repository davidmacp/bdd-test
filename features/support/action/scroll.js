/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
module.exports = function (selector) {
  if (!this || !this.browser) {
    return
  }

  // console.log(selector)

  this.browser.scroll(selector)
}
