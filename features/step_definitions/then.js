const checkClass = require('../support/checkClass')
const checkContainsAnyText = require('../support/checkContainsAnyText')
const checkIsEmpty = require('../support/checkIsEmpty')
const checkContainsText = require('../support/checkContainsText')
const checkCookieContent = require('../support/checkCookieContent')
const checkCookieExists = require('../support/checkCookieExists')
const checkDimension = require('../support/checkDimension')
const checkEqualsText = require('../support/checkEqualsText')
const checkFocus = require('../support/checkFocus')
const checkInURLPath = require('../support/checkInURLPath')
const checkIsOpenedInNewWindow = require('../support/checkIsOpenedInNewWindow')
const checkModal = require('../support/checkModal')
const checkModalText = require('../support/checkModalText')
const checkNewWindow = require('../support/checkNewWindow')
const checkOffset = require('../support/checkOffset')
const checkProperty = require('../support/checkProperty')
const checkSelected = require('../support/checkSelected')
const checkTitle = require('../support/checkTitle')
const checkURL = require('../support/checkURL')
const checkURLPath = require('../support/checkURLPath')
const checkWithinViewport = require('../support/checkWithinViewport')
const compareText = require('../support/compareText')
const isEnabled = require('../support/isEnabled')
const isExisting = require('../support/isExisting')
const isVisible = require('../support/isVisible')
// const waitFor = require('../support/check/action/waitFor')
// const waitForVisible = require('../support/check/action/waitForVisible')
// const checkIfElementExists = require('../support/check/libIfElementExists')

module.exports = function () {
  this.Then(
        /^I expect that the title is( not)* "([^"]*)?"$/,
        checkTitle
    )

  // this.Then(
  //       /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
  //       checkIfElementExists
  //   )

  this.Then(
        /^I expect that element "([^"]*)?" is( not)* visible$/,
        isVisible
    )

  // this.Then(
  //       /^I expect that element "([^"]*)?" becomes( not)* visible$/,
  //       waitForVisible
  //   )

  this.Then(
        /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
        checkWithinViewport
    )

  this.Then(
        /^I expect that element "([^"]*)?" does( not)* exist$/,
        isExisting
    )

  this.Then(
        /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
        compareText
    )

  this.Then(
        /^I expect that (header|button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
        checkEqualsText
    )

  this.Then(
        /^I expect that (header|button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
        checkContainsText
    )

  this.Then(
        /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
        checkContainsAnyText
    )

  this.Then(
        /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
        checkIsEmpty
    )

  this.Then(
        /^I expect that the url is( not)* "([^"]*)?"$/,
        checkURL
    )

  this.Then(
        /^I expect that the path is( not)* "([^"]*)?"$/,
        checkURLPath
    )

  this.Then(
        /^I expect the url to( not)* contain "([^"]*)?"$/,
        checkInURLPath
    )

  this.Then(
        /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
        checkProperty
    )

  this.Then(
        /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
        checkSelected
    )

  this.Then(
        /^I expect that element "([^"]*)?" is( not)* selected$/,
        checkSelected
    )

  this.Then(
        /^I expect that element "([^"]*)?" is( not)* enabled$/,
        isEnabled
    )

  this.Then(
        /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
        checkCookieContent
    )

  this.Then(
        /^I expect that cookie "([^"]*)?"( not)* exists$/,
        checkCookieExists
    )

  this.Then(
        /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
        checkDimension
    )

  this.Then(
        /^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
        checkOffset
    )

  this.Then(
        /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
        checkClass
    )

  this.Then(
        /^I expect a new (window|tab) has( not)* been opened$/,
        checkNewWindow
    )

  this.Then(
        /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
        checkIsOpenedInNewWindow
    )

  this.Then(
        /^I expect that element "([^"]*)?" is( not)* focused$/,
        checkFocus
    )

  // this.Then(
  //       /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
  //   {
  //     wrapperOptions: {
  //       retry: 3
  //     }
  //   },
  //       waitFor
  //   )

  this.Then(
        /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
        checkModal
    )

  this.Then(
        /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
        checkModalText
    )
}
