const checkClass = require('../support/check/checkClass')
const checkContainsAnyText = require('../support/check/checkContainsAnyText')
const checkIsEmpty = require('../support/check/checkIsEmpty')
const checkContainsText = require('../support/check/checkContainsText')
const checkCookieContent = require('../support/check/checkCookieContent')
const checkCookieExists = require('../support/check/checkCookieExists')
const checkDimension = require('../support/check/checkDimension')
const checkEqualsText = require('../support/check/checkEqualsText')
const checkFocus = require('../support/check/checkFocus')
const checkInURLPath = require('../support/check/checkInURLPath')
const checkIsOpenedInNewWindow = require('../support/check/checkIsOpenedInNewWindow')
const checkModal = require('../support/check/checkModal')
const checkModalText = require('../support/check/checkModalText')
const checkNewWindow = require('../support/check/checkNewWindow')
const checkOffset = require('../support/check/checkOffset')
const checkProperty = require('../support/check/checkProperty')
const checkSelected = require('../support/check/checkSelected')
const checkTitle = require('../support/check/checkTitle')
const checkURL = require('../support/check/checkURL')
const checkURLPath = require('../support/check/checkURLPath')
const checkWithinViewport = require('../support/check/checkWithinViewport')
const compareText = require('../support/check/compareText')
const isEnabled = require('../support/check/isEnabled')
const isExisting = require('../support/check/isExisting')
const isVisible = require('../support/check/isVisible')
const waitFor = require('../support/action/waitFor')
const waitForVisible = require('../support/action/waitForVisible')
const checkIfElementExists = require('../support/lib/checkIfElementExists')

const defineSupportCode = require('cucumber').defineSupportCode

defineSupportCode(function ({ Then }) {
  Then(
    /^I expect that the title is( not)* "([^"]*)?"$/,
    checkTitle
  )

  Then(
    /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
    checkIfElementExists
  )

  Then(
    /^I expect that element "([^"]*)?" is( not)* visible$/,
    isVisible
  )

  Then(
    /^I expect that element "([^"]*)?" becomes( not)* visible$/,
    waitForVisible
  )

  Then(
    /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
    checkWithinViewport
  )

  Then(
    /^I expect that element "([^"]*)?" does( not)* exist$/,
    isExisting
  )

  Then(
    /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
    compareText
  )

  Then(
    /^I expect that (header|button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
  )

  Then(
    /^I expect that (header|button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
  )

  Then(
    /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
  )

  Then(
    /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
  )

  Then(
    /^I expect that the url is( not)* "([^"]*)?"$/,
    checkURL
  )

  Then(
    /^I expect that the path is( not)* "([^"]*)?"$/,
    checkURLPath
  )

  Then(
    /^I expect the url to( not)* contain "([^"]*)?"$/,
    checkInURLPath
  )

  Then(
    /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
  )

  Then(
    /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
  )

  Then(
    /^I expect that element "([^"]*)?" is( not)* selected$/,
    checkSelected
  )

  Then(
    /^I expect that element "([^"]*)?" is( not)* enabled$/,
    isEnabled
  )

  Then(
    /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
    checkCookieContent
  )

  Then(
    /^I expect that cookie "([^"]*)?"( not)* exists$/,
    checkCookieExists
  )

  Then(
    /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    checkDimension
  )

  Then(
    /^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
    checkOffset
  )

  Then(
    /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
    checkClass
  )

  Then(
    /^I expect a new (window|tab) has( not)* been opened$/,
    checkNewWindow
  )

  Then(
    /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
    checkIsOpenedInNewWindow
  )

  Then(
    /^I expect that element "([^"]*)?" is( not)* focused$/,
    checkFocus
  )

  Then(
    /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/, {
      wrapperOptions: {
        retry: 3
      }
    },
    waitFor
  )

  Then(
    /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
  )

  Then(
    /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
    checkModalText
  )
})
