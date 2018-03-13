/**
 * Submit the given form
 * @param  {String}   form Form element selector
 */
module.exports = function (form) {
  if (!this || !this.browser) {
    return
  }

  this.browser.submitForm(form)
}
