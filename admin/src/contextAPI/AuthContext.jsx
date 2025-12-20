import { createContext, useEffect, useState } from "react";
import { api } from "../api";
const AuthContext = createContext();

const AuthContextProvider = ({children}) =>{
    const [auth,setAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const checkAdminAuth = async () => {
        try {
            const { data } = await api.get("/api/auth/admin-auth-check");
            if (data?.ok) {
                setAuth(data.user);
            }
        } catch (error) {
            setAuth(null);
        } finally {
            setLoading(false);
        }
        };

        checkAdminAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth,loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContextProvider,AuthContext};