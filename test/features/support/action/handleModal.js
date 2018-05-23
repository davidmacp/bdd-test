/**
 * Handle a modal
 * @param  {String}   action    Action to perform on the modal (accept, dismiss)
 * @param  {String}   modalType Type of modal (alertbox, confirmbox, prompt)
 */
module.exports = function (action, modalType) {
  /**
   * The command to perform on the browserobject
   * @type {String}
   */
  let command = `alert${action.slice(0, 1).toUpperCase()}${action.slice(1)}`

  /**
   * Alert boxes can't be dismissed, this causes Chrome to crash during tests
   */
  if (modalType === 'alertbox') {
    command = 'alertAccept'
  }

  browser[command]()
}
