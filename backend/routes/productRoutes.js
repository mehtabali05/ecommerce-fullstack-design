import express from "express";
import upload from "../middlewares/upload.js";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
  relatedProducts,
  getProductListController
} from "../controllers/productController.js";
import { protect, authorizeAdmin } from "../middlewares/auth.js";

const router = express.Router();

// public
// router.get("/", getProducts);
router.get("/", getProductListController);
router.get("/:id", getProductById);

// admin-protected: create, update, delete
router.post("/", protect, authorizeAdmin,
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "images", maxCount: 6 }
  ]),
  createProduct
);

router.put("/:id", protect, authorizeAdmin,
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "images", maxCount: 6 }
  ]),
  updateProduct
);

router.delete("/:id", protect, authorizeAdmin, deleteProduct);

router.get("/:pId/:cId",relatedProducts);

export default router;
