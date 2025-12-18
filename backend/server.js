import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDb.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cookieParser from 'cookie-parser';

// DATABASE CALL
dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
    'http://localhost:5173', // Main Frontend App
    'http://localhost:5174'  // Admin Dashboard App
];

// MIDDLEWARES
// app.use(cors());
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true); 
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));
app.use(express.json()); // body parser for JSON
app.use(cookieParser());


// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
