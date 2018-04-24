module.exports = function (selector, count) {
  const elements = browser.elements(selector)

  expect(elements.value.length).to.equal(count)
}
