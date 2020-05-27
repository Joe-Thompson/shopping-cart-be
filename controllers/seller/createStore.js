const Store = require("../../models/store");
const {
  validateCreateStoreInput,
} = require("../../middleware/validateCreateStoreData");

async function createStore(req, res) {

	const { businessName, ownerName, address, secondAddress, city, state, zipCode, hours } = req.body;
	const { sub: sellerId } = req.decodedToken;

  const { errors, isValid } = validateCreateStoreInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }


		if (result) {
			return res.status(400).json({ message: 'You can not create more than one store' });
		}
		else {
			const User = await Store.findOne({ businessName });
			if (User) {
				return res.status(400).json({ message: 'Store name already exists' });
			}
		}
		const newStore = new Store({
			businessName: req.body.businessName,
			ownerName: req.body.ownerName,
			address: req.body.address,
			secondAddress: req.body.secondAddress,
			city: req.body.city,
			state: req.body.city,
			zipCode: req.body.zipCode,
			hours: req.body.hours,
			seller: req.decodedToken.sub
		});
		const saved = await newStore.save();
		return res.status(201).json({
			saved
		});
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

}

module.exports = createStore;
