const checkContainsAnyText = require('../support/check/checkContainsAnyText')
const checkIsEmpty = require('../support/check/checkIsEmpty')
const checkContainsText = require('../support/check/checkContainsText')
const checkCookieContent = require('../support/check/checkCookieContent')
const checkCookieExists = require('../support/check/checkCookieExists')
const checkDimension = require('../support/check/checkDimension')
const checkElementExists = require('../support/check/checkElementExists')
const checkEqualsText = require('../support/check/checkEqualsText')
const checkModal = require('../support/check/checkModal')
const checkOffset = require('../support/check/checkOffset')
const checkProperty = require('../support/check/checkProperty')
const checkSelected = require('../support/check/checkSelected')
const checkTitle = require('../support/check/checkTitle')
const checkUrl = require('../support/check/checkURL')
const closeAllButFirstTab = require('../support/action/closeAllButFirstTab')
const compareText = require('../support/check/compareText')
const isEnabled = require('../support/check/isEnabled')
const isVisible = require('../support/check/isVisible')
const openWebsite = require('../support/action/openWebsite')
const resizeScreenSize = require('../support/action/resizeScreenSize')

const defineSupportCode = require('cucumber').defineSupportCode

defineSupportCode(function ({ Given }) {
  Given(
    /^I am on the DADI\.cloud homepage$/, function () {
      openWebsite('url', 'http://beta2.dadi.cloud/en') // TODO: pull from config
    }
  )

  Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
  )

  Given(
    /^the element "([^"]*)?" is( not)* visible$/,
    isVisible
  )

  Given(
    /^the element "([^"]*)?" is( not)* enabled$/,
    isEnabled
  )

  Given(
    /^the element "([^"]*)?" is( not)* selected$/,
    checkSelected
  )

  Given(
    /^the checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
  )

  Given(
    /^there is (an|no) element "([^"]*)?" on the page$/,
    checkElementExists
  )

  Given(
    /^the title is( not)* "([^"]*)?"$/,
    checkTitle
  )

  Given(
    /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
    compareText
  )

  Given(
    /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
  )

  Given(
    /^the (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
  )

  Given(
    /^the (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
  )

  Given(
    /^the (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
  )

  Given(
    /^the page url is( not)* "([^"]*)?"$/,
    checkUrl
  )

  Given(
    /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
  )

  Given(
    /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
    checkCookieContent
  )

  Given(
    /^the cookie "([^"]*)?" does( not)* exist$/,
    checkCookieExists
  )

  Given(
    /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    checkDimension
  )

  Given(
    /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
    checkOffset
  )

  Given(
    /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
    resizeScreenSize
  )

  Given(
    /^I have closed all but the first (window|tab)$/,
    closeAllButFirstTab
  )

  Given(
    /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
  )
})
