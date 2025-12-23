import express from 'express';
import { protect } from '../middlewares/auth.js';
import { addToCart, clearCart, getCart, removeFromCart, updateCartQuantity } from '../controllers/userController.js';
const router = express.Router();

router.post("/cart", protect, addToCart);
router.get("/cart", protect, getCart);
router.delete("/cart/:productId", protect, removeFromCart);
router.delete("/cart", protect, clearCart);
router.put("/cart", protect, updateCartQuantity);


export default router;