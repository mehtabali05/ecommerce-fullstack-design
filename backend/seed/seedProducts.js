import dotenv from 'dotenv';
dotenv.config();

import Product from './../models/Product.js';
import Category from './../models/Category.js';
import { categories, products } from './data.js'; 
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import fs from 'fs'; // Added to check if file exists
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const connectDb = async () => {
    try {
        // Using your provided connection string
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("📦 Connected to MongoDB");
    } catch (err) {
        console.error("Database connection error", err);
        process.exit(1);
    }
}

const uploadLocalImage = async (localPath) => {
    try {
        // This creates the absolute path
        const absolutePath = path.resolve(__dirname, localPath);
        
        // --- DEBUG START ---
        console.log(`🔍 Checking: ${absolutePath}`); 
        if (!fs.existsSync(absolutePath)) {
            console.error(`❌ NOT FOUND: The computer looked at the path above and found nothing.`);
            return null; 
        }
        // --- DEBUG END ---

        const result = await cloudinary.uploader.upload(absolutePath, {
            folder: "e-commerce/seeded-products",
            use_filename: true
        });
        
        return result.secure_url;
    } catch (error) {
        console.error(`❌ Cloudinary Error:`, error.message);
        return null; 
    }
};

const seed = async () => {
    try {
        await connectDb();
        
        // Wipe existing data to start fresh
        await Product.deleteMany();
        await Category.deleteMany();

        // 1. Seed Categories
        const newCategories = await Category.insertMany(categories);
        const categoryMap = {};
        newCategories.forEach(cat => categoryMap[cat.slug] = cat._id);
        console.log("📂 Categories Ready");

        const seededProducts = [];

        // 2. Loop through products
        for (const item of products) {
            console.log(`⏳ Uploading images for: ${item.name}`);

            // Upload Main Image
            const mainUrl = await uploadLocalImage(item.mainImage);

            // Upload Gallery Images
            const galleryUrls = [];
            if (item.images && item.images.length > 0) {
                for (const img of item.images) {
                    const url = await uploadLocalImage(img);
                    if (url) galleryUrls.push(url);
                }
            }

            seededProducts.push({
                ...item,
                // If Cloudinary fails, it will fall back to placeholder
                mainImage: mainUrl || "https://via.placeholder.com/500?text=Upload+Failed",
                images: galleryUrls,
                category: categoryMap[item.category]
            });
        }

        // 3. Final Save
        await Product.insertMany(seededProducts);
        console.log("\n🚀 SUCCESS: Database seeded and Cloudinary images linked!");
        process.exit(0);

    } catch (error) {
        console.error("Critical Seeding Failure:", error);
        process.exit(1);
    }
}

seed();