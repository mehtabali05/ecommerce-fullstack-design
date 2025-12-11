// backend/controllers/categoryController.js
import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const cats = await Category.find({}).sort("name");
    res.json(cats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name required" });
    const exists = await Category.findOne({ name });
    if (exists) return res.status(400).json({ message: "Category exists" });

    const cat = await Category.create({ name });
    res.status(201).json(cat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
