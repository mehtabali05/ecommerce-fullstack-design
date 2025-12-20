// context/AuthContext.jsx
import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../api";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const logout = async () => {
    await api.post("api/auth/logout");
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ auth, setAuth,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
