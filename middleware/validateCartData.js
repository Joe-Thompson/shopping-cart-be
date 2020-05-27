const isEmpty = require('is-empty');
function validateCartInput(data) {
	const errors = {};
	// Convert empty fields to an empty string so we can use validator functions
	let { quantity } = data;

	quantity = quantity || '';

	// agreedPrice checks
	if (!quantity) {
		errors.quantity = 'quantity field is required';
	}
	else if (isNaN(quantity)) {
		errors.quantity = 'quantity must be a number';
	}
	else if (Number(quantity) < 0) {
		errors.quantity = 'quantity cant be less than 1';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
}

module.exports = { validateCartInput };
