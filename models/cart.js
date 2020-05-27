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
			variantDetail: {
				type: String
			}
		}
	]
});

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;
