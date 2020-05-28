const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
	contents: [
		{
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'product'
			},
			quantity: {
				type: Number,
				required: true
			},
			variantId: {
				type: String //forntEnd must return ID of variant.
			}
		}
	]
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;
