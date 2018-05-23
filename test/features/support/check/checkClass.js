/**
 * Check if the given element has the given class
 * @param  {String}   elem              Element selector
 * @param  {String}   falseCase         Whether to check for the class to exist
 *                                      or not ('has', 'does not have')
 * @param  {String}   expectedClassName The class name to check
 */
module.exports = async function (elem, falseCase, expectedClassName) {
  /**
 * List of all the classes of the element
 * @type {Array}
 */
  let page = await this.browser.pages()
  // console.log(p)
  // await p.goto(url)
  let classesList = await page[0].$eval(elem, el => el)
  console.log(classesList)
  return false
  // if (falseCase === 'does not have') {
  //   expect(classesList).to.not
  //     .include(
  //       expectedClassName,
  //       `Element ${elem} should not have the class ${expectedClassName}`
  //     )
  // } else {
  //   expect(classesList).to
  //     .include(
  //       expectedClassName,
  //       `Element ${elem} should have the class ${expectedClassName}`
  //     )
  // }
}
