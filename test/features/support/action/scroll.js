/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
module.exports = function (selector) {
  // console.log(selector)

  browser.scroll(selector)
}
