import { useState, createContext, useContext, useEffect, useRef } from "react";
import { api } from "../api";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const isInitialMount = useRef(true);
  const { auth } = useAuth();

  // 🔹 1. Load cart only after auth is available
  useEffect(() => {
    if (!auth?._id) return;

    const loadCart = async () => {
      try {
        console.log("Auth",auth);
        const { data } = await api.get("/api/user/cart");
        console.log("Cart Loading",data);
        if (Array.isArray(data)) setCart(data);
      } catch (error) {
        console.error("Cart load error:", error);
        setCart([]); // clear cart if unauthorized
      }
    };

    loadCart();
  }, [auth?._id]);

  // 🔹 2. Sync cart with DB (send productId instead of _id)
  useEffect(() => {
    if (!auth?._id) return;
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    const syncCart = async () => {
      try {
        const cartItems = cart.map(item => ({
          productId: item._id, // 🔹 backend expects productId
          quantity: item.quantity
        }));

        await api.post("/api/user/cart-sync", { cartItems });
        console.log("Cart synced successfully");
      } catch (error) {
        console.error("Cart sync failed:", error);
      }
    };

    const timer = setTimeout(syncCart, 800);
    return () => clearTimeout(timer);
  }, [cart, auth?._id]);

  /* ================================
     CART ACTIONS
     ================================ */
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item._id === product._id);
      if (exists) {
        return prev.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success("Added to cart");
  };

  const removeFromCart = (pid) => {
    setCart(prev => prev.filter(item => item._id !== pid));
    toast.error("Removed from cart");
  };

  const updateQuantity = (pid, qty) => {
    if (qty < 1) return;
    setCart(prev =>
      prev.map(item =>
        item._id === pid ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = async () => {
    setCart([]);
    localStorage.removeItem("cart");
    try {
      if (auth?._id) {
        await api.post("/api/user/cart-sync", { cartItems: [] });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
