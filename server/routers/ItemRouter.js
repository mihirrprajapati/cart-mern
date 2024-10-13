import express from "express";
import { GetProd, AddProd } from "../controllers/ItemController.js";

const ItemRouter = express.Router();

ItemRouter.get("/", GetProd);

ItemRouter.post("/add", AddProd);

export default ItemRouter;
