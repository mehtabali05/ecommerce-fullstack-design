import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8080', // Your backend URL
    // 🔑 CRITICAL CHANGE: Allows cookies/headers to be sent cross-origin
    withCredentials: true, 
});