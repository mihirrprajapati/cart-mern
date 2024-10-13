import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import CartRouter from "./routers/CartRouter.js";
import ItemRouter from "./routers/ItemRouter.js";

const app = express();
const PORT = 3001;

try {
  mongoose.connect("mongodb://localhost:27017/exam");
  console.log("database connected.....");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(cors());

app.use("/cart", CartRouter);

app.use("/item", ItemRouter);

app.listen(PORT, () => {
  console.log("Connected to port ", PORT);
});
