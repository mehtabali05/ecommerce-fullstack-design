import express from "express";
import { getCategories, createCategory, updateCategoryController, deleteCategoryController } from "../controllers/categoryController.js";
import { protect, authorizeAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", protect, authorizeAdmin, createCategory);
// router.put("/id", protect, authorizeAdmin, updateCategoryController);
router.delete("/:id", protect, authorizeAdmin, deleteCategoryController);

export default router;
