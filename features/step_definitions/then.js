const checkContainsText = require('../support/checkContainsText')
const checkEqualsText = require('../support/checkEqualsText')
const isVisible = require('../support/isVisible')

module.exports = function () {
  this.Then(/^the element "([^"]*)?" is( not)* visible$/, isVisible)
  this.Then(/^I expect that (button|header|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
  )
  this.Then(/^I expect that (button|header|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
  )
}
