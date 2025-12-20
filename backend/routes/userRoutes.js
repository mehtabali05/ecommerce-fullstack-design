import express from 'express';
import { protect } from '../middlewares/auth.js';
import { getCartController, syncCartController } from '../controllers/userController.js';
const router = express.Router();

router.get("/cart", protect, getCartController); 
router.post("/cart-sync", protect, syncCartController);

export default router;