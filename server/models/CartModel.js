import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  imgStr: String,
  prodName: String,
  price: Number,
  qty: Number,
});

const CartModel = mongoose.model("prod", cartSchema);

export default CartModel;
