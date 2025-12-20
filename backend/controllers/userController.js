// controllers/userController.js (or create cartController.js)
import User from "../models/User.js";

// GET user cart
export const getCartController = async (req, res) => {
  try {
    // 1. Find user and populate. 
    // IMPORTANT: Ensure the path matches your User Model field name exactly
    const user = await User.findById(req.user._id);

    console.log("Bakend ",user);

    if (!user) return res.status(404).json({ message: "User not found" });

    // 2. Transform the data so the frontend gets exactly what it needs
    const formattedCart = user.cart
      .filter(item => item.productId) // Remove items where product might have been deleted
      .map((item) => ({
        _id: item.productId._id,
        name: item.productId.name,
        price: item.productId.price,
        mainImage: item.productId.mainImage,
        quantity: item.quantity || 1,
        description: item.productId.description
      }));

    res.status(200).json(formattedCart);
  } catch (error) {
    console.error("Cart Fetch Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// SYNC user cart (Send the whole array from frontend to DB)
export const syncCartController = async (req, res) => {
  try {
    const { cartItems } = req.body; // Array of {_id, quantity}

    const updatedCart = cartItems.map(item => ({
      productId: item.productId,
      quantity: item.quantity
    }));

    await User.findByIdAndUpdate(req.user._id, { cart: updatedCart });
    res.status(200).send({ success: true, message: "Cart synced successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error syncing cart" });
  }
};

