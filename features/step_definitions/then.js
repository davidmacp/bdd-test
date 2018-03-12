const isVisible = require('../support/isVisible')

module.exports = function () {
  this.Then(/^the element "([^"]*)?" is( not)* visible$/, isVisible)
}
