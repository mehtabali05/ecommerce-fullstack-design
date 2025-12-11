// seed.js

import dotenv from 'dotenv';
// Assuming the path to your connectDb, Product, and Category files are correct:
import connectDb from './../config/connectDb'; 
import Product from './../models/Product';
import Category from './../models/Category';
import { categories, products } from './data'; // Import data with slugs

dotenv.config();
connectDb();

const seed = async () => {
    try {
        console.log("Starting seed process...");

        // 1. Clear existing data
        await Product.deleteMany();
        await Category.deleteMany();
        console.log("Existing data cleared.");

        // 2. Insert Categories
        const newCategories = await Category.insertMany(categories);
        console.log("Categories seeded successfully.");

        // 3. Create a map of slug to Category _id for linking
        const categoryMap = {};
        newCategories.forEach(cat => {
            categoryMap[cat.slug] = cat._id;
        });

        // 4. Update Products to use the correct Category _id
        const productsWithIds = products.map(product => {
            const categoryId = categoryMap[product.category]; // product.category is still the slug here
            
            if (!categoryId) {
                console.error(`Error: Could not find Category ID for slug: ${product.category}. Product: ${product.name}`);
                // Throwing an error here prevents inserting products with invalid references
                throw new Error("Category ID missing for product.");
            }

            // Create the new product object with the correct ObjectId reference
            return {
                ...product,
                category: categoryId, // Replace slug with ObjectId
            };
        });

        // 5. Insert Products
        await Product.insertMany(productsWithIds);
        console.log("Products seeded successfully and linked to categories.");

        console.log("Seed completed.");
        process.exit(0); // Use 0 for success
        
    } catch (error) {
        console.error("SEEDING FAILED:");
        console.error(error);
        process.exit(1); // Use 1 for failure
    }
}

seed();