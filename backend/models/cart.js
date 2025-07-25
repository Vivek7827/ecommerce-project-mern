const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    require: true,
  },
  cartItems: [],
  totalPrice: Number,
  totalQunatity: Number,
})

module.exports = mongoose.model("Cart", cartSchema);