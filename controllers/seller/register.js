const Sellers = require("../../models/seller");
const bcrypt = require("bcryptjs");
const generateToken = require("../../helpers/generateToken");
const {validateRegisterInput} = require("../../middlewares/validateSellerData");

function register (req, res) {
  const { errors, isValid } = validateRegisterInput(
    req.body
  )
  if (!isValid) {
    return res.status(400).json(errors)
  }
  const { phone, password } = req.body

  // Check if User already exists
  Sellers.findOne({ phone }).then(user => {
    if (user) {
      return res.status(400).json({ message: 'User already exists' })
    }
    const newUser = new Sellers({ phone, password })

    // Hash User Password
    const hash = bcrypt.hashSync(password, 10)
    newUser.password = hash
    newUser
      .save()
      .then(user => {
        // Generate Token and sends it back with user data
        const token = generateToken(user)
        res.status(201).json({
          user: {
            id: user.id,
            phone: user.phone
          },
          token
        })
      })
      .catch(err => {
        res.status(500).json(err.message)
      })
  })
}

module.exports = register
