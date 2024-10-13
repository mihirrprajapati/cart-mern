import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  imgStr: String,
  prodName: String,
  price: Number,
  qty: Number,
});

const ItemModel = mongoose.model("item", itemSchema);

export default ItemModel;
