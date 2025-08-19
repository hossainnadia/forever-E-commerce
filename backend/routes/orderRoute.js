import express from "express";
import {
  placeOrder,
  placeOrdersStripe,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderControllers.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// payment feature
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrdersStripe);
// orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// user Feature
orderRouter.post("/userorders", authUser, userOrders);
//
orderRouter.post("/verifyStripe", authUser, verifyStripe);
export default orderRouter;
