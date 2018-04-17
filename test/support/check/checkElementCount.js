module.exports = function (selector, count) {
  console.log(selector, count)
  const elements = browser.elements(selector)
  console.log(elements)
  expect(elements.value.length).to.equal(count)
}
