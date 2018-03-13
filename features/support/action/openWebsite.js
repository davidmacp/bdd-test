/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
module.exports = function (type, page) {
  if (!this || !this.browser) {
    return
  }

  /**
   * The URL to navigate to
   * @type {String}
   */
  const url = (type === 'url') ? page : this.browser.options.baseUrl + page

  this.browser.url(url)
}
