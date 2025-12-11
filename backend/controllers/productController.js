// backend/controllers/productController.js
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import { uploadBufferToCloudinary } from "../utils/cloudinaryUpload.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category: categoryInput, stock } = req.body;

    if (!name || !price || !description || !categoryInput) {
      return res.status(400).json({ message: "name, price, description, category required" });
    }

    // resolve category (id or name)
    let categoryId = null;
    if (/^[0-9a-fA-F]{24}$/.test(categoryInput)) {
      const cat = await Category.findById(categoryInput);
      if (cat) categoryId = cat._id;
    }
    if (!categoryId) {
      // find or create by name
      const cat = await Category.findOneAndUpdate({ name: categoryInput }, { name: categoryInput }, { upsert: true, new: true });
      categoryId = cat._id;
    }

    // main image required
    if (!req.files || !req.files.mainImage || req.files.mainImage.length === 0) {
      return res.status(400).json({ message: "Main image is required" });
    }

    // upload main image
    const mainFile = req.files.mainImage[0];
    const mainResult = await uploadBufferToCloudinary(mainFile.buffer, "products/main");
    const mainUrl = mainResult.secure_url || mainResult.url;

    // optional gallery images (up to 6)
    let galleryUrls = [];
    if (req.files.images && req.files.images.length > 0) {
      if (req.files.images.length > 6) return res.status(400).json({ message: "Max 6 gallery images allowed" });
      for (const f of req.files.images) {
        const r = await uploadBufferToCloudinary(f.buffer, "products/gallery");
        galleryUrls.push(r.secure_url || r.url);
      }
    }

    const prod = await Product.create({
      name,
      price,
      description,
      stock: stock || 1,
      category: categoryId,
      mainImage: mainUrl,
      images: galleryUrls
    });

    const populated = await Product.findById(prod._id).populate("category", "name");
    res.status(201).json(populated);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const prod = await Product.findById(req.params.id);
    if (!prod) return res.status(404).json({ message: "Product not found" });

    const { name, price, description, category: categoryInput, stock } = req.body;

    if (name) prod.name = name;
    if (price) prod.price = price;
    if (description) prod.description = description;
    if (stock !== undefined) prod.stock = stock;

    if (categoryInput) {
      if (/^[0-9a-fA-F]{24}$/.test(categoryInput)) {
        const cat = await Category.findById(categoryInput);
        if (cat) prod.category = cat._id;
      } else {
        const cat = await Category.findOneAndUpdate({ name: categoryInput }, { name: categoryInput }, { upsert: true, new: true });
        prod.category = cat._id;
      }
    }

    // If mainImage provided, upload and replace
    if (req.files && req.files.mainImage && req.files.mainImage.length > 0) {
      const mainResult = await uploadBufferToCloudinary(req.files.mainImage[0].buffer, "products/main");
      prod.mainImage = mainResult.secure_url || mainResult.url;
    }

    // If gallery images provided, replace
    if (req.files && req.files.images && req.files.images.length > 0) {
      if (req.files.images.length > 6) return res.status(400).json({ message: "Max 6 gallery images allowed" });
      const newGallery = [];
      for (const f of req.files.images) {
        const r = await uploadBufferToCloudinary(f.buffer, "products/gallery");
        newGallery.push(r.secure_url || r.url);
      }
      prod.images = newGallery;
    }

    await prod.save();
    const updated = await Product.findById(prod._id).populate("category", "name");
    res.json(updated);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const prod = await Product.findById(req.params.id);
    if (!prod) return res.status(404).json({ message: "Product not found" });

    // For simplicity we are not deleting images from Cloudinary in this simple build.
    // You can extend to store public_id and remove them via cloudinary.uploader.destroy(public_id)

    await prod.remove();
    res.json({ message: "Product removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate("category", "name");
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const prod = await Product.findById(req.params.id).populate("category", "name");
    if (!prod) return res.status(404).json({ message: "Product not found" });
    res.json(prod);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
