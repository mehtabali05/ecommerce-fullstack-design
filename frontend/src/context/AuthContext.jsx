import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({children}) =>{
    const [auth,setAuth] = useState({});

    useEffect(() => {
        const data = localStorage.getItem("auth");
        if (data) {
            setAuth(JSON.parse(data));
        }
    }, []);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContextProvider,AuthContext};