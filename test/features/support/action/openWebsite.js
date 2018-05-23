/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
module.exports = async function (type, page) {
  // console.log(type, page, this.browser)
  /**
   * The URL to navigate to
   * @type {String}
   */
  let url = (type === 'url') ? 'http://52.214.26.93' + page : page

  const p = await this.browser.newPage()
  await p.setViewport({width: 1280, height: 900})
  await p.goto(url)

  // this.browser.url(url)
}
