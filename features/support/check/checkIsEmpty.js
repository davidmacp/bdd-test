const checkContainsAnyText = require('./checkContainsAnyText')

module.exports = function (elementType, element, falseCase) {
  let newFalseCase = true

  if (typeof falseCase === 'function') {
    newFalseCase = false
  } else if (falseCase === ' not') {
    newFalseCase = false
  }

  checkContainsAnyText(elementType, element, newFalseCase)
}
