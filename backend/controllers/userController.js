// controllers/userController.js (or create cartController.js)
import User from "../models/User.js";

export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate("cart.productId");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ FILTER invalid cart items
    const cart = user.cart
      .filter(item => item.productId) // CRITICAL FIX
      .map(item => ({
        _id: item.productId._id,
        name: item.productId.name,
        price: item.productId.price,
        image: item.productId.mainImage,
        quantity: item.quantity
      }));

    res.status(200).json(cart);
  } catch (error) {
    console.error("Get Cart Error:", error);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
};


export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    if (!productId) {
      return res.status(400).json({ message: "Invalid product" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ FILTER OUT broken items before logic
    user.cart = user.cart.filter(item => item.productId);

    const itemIndex = user.cart.findIndex(
      item => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      user.cart[itemIndex].quantity += quantity;
    } else {
      user.cart.push({ productId, quantity });
    }

    await user.save();
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Add To Cart Error:", error);
    res.status(500).json({ message: "Failed to add to cart" });
  }
};


export const removeFromCart = async (req, res) => {
  const { productId } = req.params;

  await User.findByIdAndUpdate(req.user.id, {
    $pull: { cart: { productId } }
  });

  res.json({ success: true });
};

export const clearCart = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $set: { cart: [] }
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Clear Cart Error:", error);
    res.status(500).json({ message: "Failed to clear cart" });
  }
};

export const updateCartQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || quantity < 1) {
      return res.status(400).json({ message: "Invalid data" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const item = user.cart.find(
      item => item.productId.toString() === productId
    );

    if (!item) {
      return res.status(404).json({ message: "Item not in cart" });
    }

    // ✅ SET quantity (NOT ADD)
    item.quantity = quantity;

    await user.save();
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Update Quantity Error:", error);
    res.status(500).json({ message: "Failed to update quantity" });
  }
};




