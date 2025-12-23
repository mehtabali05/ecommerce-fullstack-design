import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../../assets/Brand/logo-colored.svg'
import { FaUser,FaHeart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMdCart,IoMdMenu } from "react-icons/io";
import {DE, AE, AU,CN, GB, IT, RU, US, DK,FR} from '../../assets/asset'
import {Link} from 'react-router-dom';
import { api } from './../../api';
import { AiFillProduct } from "react-icons/ai";
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce.js"

const LANGUAGE_CURRENCY_OPTIONS = [
  { code: 'en-US', label: 'English, USD' },
  { code: 'en-GB', label: 'English, GBP' },
  { code: 'fr-FR', label: 'French, EUR' },
];

const COUNTRY_OPTIONS = [
  { code: 'US', flag: US, name: 'United States' },
  { code: 'AE', flag: AE, name: 'United Arab Emirates' },
  { code: 'AU', flag: AU, name: 'Australia' },
  { code: 'CN', flag: CN, name: 'China' },
  { code: 'DE', flag: DE, name: 'Germany' },
  { code: 'DK', flag: DK, name: 'Denmark' },
  { code: 'FR', flag: FR, name: 'France' },
  { code: 'GB', flag: GB, name: 'United Kingdom' },
  { code: 'IT', flag: IT, name: 'Italy' },
  { code: 'RU', flag: RU, name: 'Russia' },
];


function Header() {
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";

  const {setLoading} = useAuth();
  const [selectedLang, setSelectedLang] = useState(LANGUAGE_CURRENCY_OPTIONS[0]);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_OPTIONS[0]);
  
  const [langOpen, setLangOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [categories,setCategories] = useState([]);

  const debouncedQuery = useDebounce(query, 300);
  const navigate = useNavigate();

  const { auth, logout } = useAuth();
  const {cartCount} = useCart();

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const {data} = await api.get("/api/categories");
      console.log("Sidebar category",data);
      if(data?.success){
        setCategories(data.categories);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  },[]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!debouncedQuery.trim()) {
        setSuggestions([]);
        return;
      }
  
      try {
        const { data } = await api.get(
          `/api/products?search=${debouncedQuery}&limit=5`
        );
  
        if (data.success) {
          setSuggestions(data.products);
          setShowSuggestions(true);
        }
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchSuggestions();
  }, [debouncedQuery]);
  
  const handleSearchSubmit = (searchText) => {
    if (!searchText.trim()) return;
  
    setShowSuggestions(false);
    navigate(`/products?search=${encodeURIComponent(searchText)}`);
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;
  
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    }
  
    if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  
    if (e.key === "Enter") {
      const selected =
        highlightedIndex >= 0
          ? suggestions[highlightedIndex].name
          : query;
      handleSearchSubmit(selected);
    }
  
    if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };
  

  return (
    <header className="bg-white border-b border-gray-200">
            {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items- justify-between gap-8">
          {/* Logo */}
          <Link to="/" className='cursor-pointer'>
            <img src={logo} alt="Logo_Image" />
          </Link>

          {/* Search bar */}
          {!isCartPage && (
            <div className="flex-1 relative max-w-2xl flex max-w-2xl border border-blue-500 rounded-r-lg rounded-l-lg focus:ring-blue-50">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => query && setShowSuggestions(true)}
                aria-label="Search products"
                aria-autocomplete="list"
                aria-expanded={showSuggestions}
                className="w-full px-4 py-2 rounded-lg focus:outline-none"
                placeholder="Search products..."
              />
              <select className="px-1 py-2 border-l border-blue-500 bg-white text-gray-600 focus:outline-none">
                {categories.map((category) => (
                  <option value={category.name} key={category._id}>{category.name}</option>
                ))}
              </select>
              <button className="px-6 cursor-pointer py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors">
                Search
              </button>

              {showSuggestions && suggestions.length > 0 && (
                <ul
                  role="listbox"
                  className="absolute z-50 w-full bg-white border rounded shadow mt-11"
                >
                  {suggestions.map((item, index) => (
                    <li
                      key={item._id}
                      role="option"
                      aria-selected={highlightedIndex === index}
                      onMouseDown={() => handleSearchSubmit(item.name)}
                      className={`px-4 py-2 cursor-pointer ${
                        highlightedIndex === index
                          ? "bg-blue-100"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}


          {/* Icons */}
          <div className="flex items-center gap-4">
            <div className="relative" onMouseEnter={() => setProfileOpen(true)} onMouseLeave={() => setProfileOpen(false)}>
              <div className="flex flex-col items-center cursor-pointer text-gray-500 hover:text-gray-700">
                <FaUser className='w-5.5 h-5.5' />
                <span>Profile</span>
              </div>
              {profileOpen && (
                <div className="absolute top-full right-0 bg-white border border-gray-200 rounded shadow-md w-32 z-50">
                  {auth ? (
                    <button onClick={logout} className="w-full cursor-pointer text-left px-3 py-2 hover:bg-gray-100">Logout</button>
                  ) : (
                    <Link to="/login" className="block cursor-pointer px-3 py-2 hover:bg-gray-100">Login</Link>
                  )}
                </div>
              )}
            </div>
            <Link to="/products" className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-gray-700">
              <AiFillProduct className='w-5.5 h-5.5' />
              <span>Products</span>
            </Link>
            <Link to="/message" className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-gray-700">
              <MdMessage className='w-5.5 h-5.5' />
              <span>Message</span>
            </Link>
            <Link to="/orders" className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-gray-700">
              <FaHeart className='w-5.5 h-5.5' />
              <span>Orders</span>
            </Link>
            <Link
              to="/cart"
              className="flex flex-col items-center text-gray-500 hover:text-gray-700"
            >
              <div className="relative">
                <IoMdCart className="w-6 h-6" />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 flex items-center justify-center text-xs font-semibold text-white bg-blue-500 w-5 h-5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>

              <span className="text-sm">My Cart</span>
            </Link>

          </div>
        </div>
      </div>
      
      {/* Top bar */}
      {!isCartPage && (
        <div className="border-b border-t py-2 border-gray-300">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-900 hover:text-gray-600">
              <IoMdMenu className='w-5 h-5' />
                <span>All category</span>
              </button>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-900 hover:text-gray-600">Hot offers</a>
                <a href="#" className="text-gray-900 hover:text-gray-600">Gift boxes</a>
                <a href="#" className="text-gray-900 hover:text-gray-600">Projects</a>
                <a href="#" className="text-gray-900 hover:text-gray-600">Menu item</a>
                <button className="flex items-center gap-1 text-gray-900 hover:text-gray-600">
                  Help
                  <ChevronDown className="w-3 h-3" />
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              {/* English, USD
              <select className="flex items-center gap-1 text-gray-900 hover:text-gray-600">
                
                <ChevronDown className="w-3 h-3" />
              </select>
              Ship to */}
              <div className="flex items-center gap-6 relative">
                {/* Language & Currency Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setLangOpen(!langOpen)}
                    className="flex items-center gap-1 text-gray-900 hover:text-gray-600"
                  >
                    {selectedLang.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {langOpen && (
                    <ul className="absolute mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50">
                      {LANGUAGE_CURRENCY_OPTIONS.map((item) => (
                        <li
                          key={item.code}
                          onClick={() => {
                            setSelectedLang(item);
                            setLangOpen(false);
                          }}
                          className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                        >
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Country / Ship To Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setCountryOpen(!countryOpen)}
                    className="flex items-center gap-2 text-gray-900 hover:text-gray-600"
                  >
                    Ship to
                    <img
                      src={selectedCountry.flag}
                      alt={selectedCountry.code}
                      className="w-5 h-3 object-cover"
                    />
                    <ChevronDown className="w-3 h-3" />
                  </button>

                  {countryOpen && (
                    <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50">
                      {COUNTRY_OPTIONS.map((country) => (
                        <li
                          key={country.code}
                          onClick={() => {
                            setSelectedCountry(country);
                            setCountryOpen(false);
                          }}
                          className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          <img
                            src={country.flag}
                            alt={country.code}
                            className="w-5 h-3 object-cover"
                          />
                          <span className="text-sm">{country.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </header>
  );
}

export default Header;
