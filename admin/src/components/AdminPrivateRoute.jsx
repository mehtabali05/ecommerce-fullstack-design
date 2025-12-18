// --- Admin Project: AdminPrivateRoute.jsx (Final version) ---
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { api } from '../api'; // Must have withCredentials: true
import Spinner from './Spinner'; // Optional loading component

const AdminPrivateRoute = () => {
    const [ok, setOk] = useState(false); 
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        const authCheck = async () => {
            try {
                // 🔑 Browser sends the HTTP-Only cookie with this request
                const res = await api.get('/api/auth/admin-auth-check'); 
                
                if (res.data.ok) {
                    setOk(true);
                } else {
                    // Redirect if check fails
                    window.location.href = "http://localhost:5173/login"; 
                }
                navigate(location.state || "/profile");
            } catch (error) {
                // Catch any network errors and redirect
                window.location.href = "http://localhost:5173/login";
            }
        };

        authCheck();
    }, []); // Only run once on mount

    // Render loading state until the check is complete, then render content if OK
    return ok ? <Outlet /> : <Spinner />;
};

export default AdminPrivateRoute;