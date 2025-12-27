import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../api";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state to prevent flicker

  // On mount, check if user is logged in via cookie
  useEffect(() => {
    
    const checkAuth = async () => {
      try {
        const { data } = await api.get("/api/auth/me"); // Backend route returns user if token is valid
        console.log("Checking Auth User", data);
        if (data.success) {
          setAuth(data.user);
        } else {
          setAuth(null);
        }
      } catch (error) {
        setAuth(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const logout = async () => {
    try {
      await api.post('/api/auth/logout');
      setAuth(null);
      toast.success("Logged out successfully");
      window.location.href = '/login';
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, loading,setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
