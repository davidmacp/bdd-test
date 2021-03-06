const assert = require('chai').assert

/**
 * Set the text of the current prompt
 * @param  {String}   modalText The text to set to the prompt
 */
module.exports = function (modalText) {
  if (!this || !this.browser) {
    return
  }

  try {
    this.browser.alertText(modalText)
  } catch (e) {
    assert(e, 'A prompt was not open when it should have been open')
  }
}
