import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).sort("name");
    res.status(200).json({
      success: true,
      message: "Fetch Categories",
      categories
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({ 
      success: false,
      error: error.message,
      message: "Server error" 
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name required" });
    const exists = await Category.findOne({ name });
    if (exists) return res.status(400).json({ message: "Category exists" });

    const category = await Category.create({ name });
    res.status(201).json({
      success: true,
      message: "Category created successfully",
      category
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({ 
      success: false,
      error: error.message,
      message: "Server error" 
    });
  }
};
