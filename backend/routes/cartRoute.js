import express from "express";
import {
  getUserCart,
  addToCart,
  updateCart,
} from "../controllers/cartController.js";

import authUser from "../middlewares/auth.js";

const cartRouter = express.Router();

// add product Route

cartRouter.get("/get", authUser, getUserCart);
cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
