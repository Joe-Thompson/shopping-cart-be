const Validator = require('validator')
const isEmpty = require('is-empty')
function validateCreateStoreInput (data) {
  const errors = {}
  // Convert empty fields to an empty string so we can use validator functions
  data.ownerName = !isEmpty(data.ownerName) ? data.ownerName : ''
  data.currency = !isEmpty(data.currency) ? data.currency : ''
  data.storeName = !isEmpty(data.storeName) ? data.storeName : ''
  // Store owner's name checks
  if (Validator.isEmpty(data.ownerName)) {
    errors.ownerName = 'Name of store owner is required'
  } else if (Validator.isEmpty(data.currency)) {
    // Store currency check
    errors.currency = 'Store currency is required'
  } else if (Validator.isEmpty(data.storeName)) {
    // Store name check
    errors.storeName = 'Store name is required'
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

function validateAccountDetails (data) {
  const errors = {}
  data.stripeId = !isEmpty(data.stripeId) ? data.stripeId : ''
  if (Validator.isEmpty(data.stripeId)) {
    errors.stripeId = 'StripeId is required'
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
module.exports = { validateCreateStoreInput, validateAccountDetails }
