import express from "express";
import { register, login, adminAuthCheck } from "../controllers/authController.js";
import { authorizeAdmin, protect } from "../middlewares/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// 💡 NEW ROUTE: Admin Authentication Check
router.get(
    '/admin-auth-check', 
    protect,        // 1. Checks for the token in the Cookie/Header, verifies it, and attaches user to req.user
    authorizeAdmin, // 2. Checks if req.user.role === 'admin'
    adminAuthCheck  // 3. Sends the final success response if both checks pass
);

export default router;
