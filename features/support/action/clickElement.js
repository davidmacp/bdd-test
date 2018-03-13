const checkIfElementExists = require('../lib/checkIfElementExists')

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 */
module.exports = function (action, type, element) {
  if (!this || !this.browser) {
    return
  }

  /**
   * Element to perform the action on
   * @type {String}
   */
  const elem = (type === 'link') ? `=${element}` : element

  /**
   * The method to call on the this.browser object
   * @type {String}
   */
  const method = (action === 'click') ? 'click' : 'doubleClick'

  checkIfElementExists(elem)

  this.browser[method](elem)
}
