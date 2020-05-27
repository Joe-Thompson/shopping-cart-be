const mongoose = require('mongoose');

const cartSchema2 = new mongoose.Schema({
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

const Cart2 = mongoose.model('cart2', cartSchema2);

module.exports = Cart2;
