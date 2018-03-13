/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   element Element selector
 */
module.exports = function (element) {
  if (!this.browser) {
    return
  }

  this.browser.clearElement(element)
}
