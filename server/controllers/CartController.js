import CartModel from "../models/CartModel.js";

const GetProd = (req, res) => {
  CartModel.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

const AddProd = async (req, res) => {
  const { imgStr, prodName, price, qty } = req.body;

  const newProd = new CartModel({
    imgStr,
    prodName,
    price,
    qty,
  });

  await newProd.save();

  res.json(newProd);
};

const updateQty = (req, res) => {
  const id = req.params.id;
  const { qty } = req.body;

  CartModel.findByIdAndUpdate({ _id: id }, { qty: qty })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

const RemoveProd = (req, res) => {
  const id = req.params.id;

  CartModel.findByIdAndDelete({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

export { GetProd, AddProd, updateQty, RemoveProd };
