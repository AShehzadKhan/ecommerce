import express from "express";
import {
  allOrders,
  placeOrder,
  updateStatus,
  userOrders,
} from "../controllers/orderController.js";
import adminAuth from "../middlewares/adminAuth.js";
import authUser from "../middlewares/auth.js";

const orderRouter = express.Router();

// For Admin
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment method
orderRouter.post("/place", authUser, placeOrder);

// For User
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
