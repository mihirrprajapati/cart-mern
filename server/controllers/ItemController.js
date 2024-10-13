import ItemModel from "../models/ItemModel.js";

const GetProd = (req, res) => {
  ItemModel.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

const AddProd = async (req, res) => {
  const { imgStr, prodName, price, qty } = req.body;

  const newProd = new ItemModel({
    imgStr,
    prodName,
    price,
    qty,
  });

  await newProd.save();

  res.json(newProd);
};

export { GetProd, AddProd };
