import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-colored.svg';
import { AuthContext } from '../contextAPI/AuthContext';
import { api } from '../api'; // make sure this has withCredentials: true

function Header() {
  const { setAuth } = useContext(AuthContext);

  // Logout function
  const handleLogout = async () => {
    try {
      await api.post('/api/auth/logout'); // clear cookie on server
      setAuth(null); // clear auth context
      window.location.href = "http://localhost:5173/login"; // redirect to admin login
    } catch (error) {
      console.error('Logout error:', error);
      alert('Failed to logout. Try again.');
    }
  };

  return (
    <header className="bg-white border-bottom mb-4">
      <div className="container-fluid d-flex justify-content-between align-items-center py-2">
        {/* Logo */}
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img src={logo} alt="Logo" height="40" />
        </Link>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="btn btn-outline-primary btn-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;

