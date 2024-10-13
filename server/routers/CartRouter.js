import express from "express";
import {
  GetProd,
  AddProd,
  updateQty,
  RemoveProd,
} from "../controllers/CartController.js";

const CartRouter = express.Router();

CartRouter.get("/", GetProd);

CartRouter.post("/add", AddProd);

CartRouter.patch("/qty/:id", updateQty);

CartRouter.delete("/remove/:id", RemoveProd);

export default CartRouter;
