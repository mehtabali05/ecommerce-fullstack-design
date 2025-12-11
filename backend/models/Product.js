import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,   // FIXED
        required: true,
    },
    mainImage: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        validate: [arrayLimit, "{PATH} exceeds limit of 6"],
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    stock: {
        type: Number,
        default: 1,
    }
}, { timestamps: true });

function arrayLimit(val) {
    return val.length <= 6;
}

const Product = mongoose.model("Product", productSchema);
export default Product;
