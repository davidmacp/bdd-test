/**
 * Drag a element to a given destination
 * @param  {String}   source      The selector for the source element
 * @param  {String}   destination The selector for the destination element
 */
module.exports = function (source, destination) {
  if (!this || !this.browser) {
    return
  }

  this.browser.dragAndDrop(source, destination)
}
