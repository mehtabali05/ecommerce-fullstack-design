import express from "express";
import { getCategories, createCategory } from "../controllers/categoryController.js";
import { protect, authorizeAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", protect, authorizeAdmin, createCategory);

export default router;
