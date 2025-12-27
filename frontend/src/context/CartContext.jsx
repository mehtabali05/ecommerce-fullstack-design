import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../api";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

const CartContext = createContext();
let quantityTimeout;

export const CartProvider = ({ children }) => {
  const { auth, loading } = useAuth();
  const [cart, setCart] = useState([]);

  // Load cart on login
  useEffect(() => {

    if (loading || !auth) return;
    const loadCart = async () => {
      try {
        const res = await api.get("/api/user/cart");
        setCart(res.data);
      } catch (error) {
        // console.error("Cart load failed");
        setCart([]);
      }
    };

    loadCart();
  }, [auth, loading]);

  // Add to cart
  const addToCart = async (productId, quantity = 1) => {
    await api.post("/api/user/cart", { productId, quantity });
    const res = await api.get("/api/user/cart");
    setCart(res.data);
    toast.success("Added to cart");
  };

  const removeFromCart = async (productId) => {
    const previousCart = cart;
  
    setCart(prev => prev.filter(item => item._id !== productId));
  
    try {
      await api.delete(`/api/user/cart/${productId}`);
      toast.success("Removed from cart");
    } catch (error) {
      setCart(previousCart); // rollback
      toast.error("Failed to remove item");
    }
  };
  

  const clearCart = async () => {
    await api.delete("/api/user/cart");
    setCart([]);
    toast.success("Cart cleared");
  };
  

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
  
    // 1️⃣ Update UI immediately
    setCart(prev =>
      prev.map(item =>
        item._id === productId
          ? { ...item, quantity }
          : item
      )
    );
  
    // 2️⃣ Debounce backend call
    clearTimeout(quantityTimeout);
  
    quantityTimeout = setTimeout(async () => {
      try {
        await api.put("/api/user/cart", {
          productId,
          quantity
        });
      } catch {
        toast.error("Failed to update quantity");
      }
    }, 400);
  };
  
  

  // Total price (memoized)
  const totalPrice = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cart]);
  
  
  

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        totalPrice,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
