import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../../assets/Brand/logo-colored.svg'
import { FaUser,FaHeart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMdCart,IoMdMenu } from "react-icons/io";
import {DE, AE, AU,CN, GB, IT, RU, US, DK,FR} from '../../assets/asset'
import {Link} from 'react-router-dom';
import { api } from './../../api';
import { AiFillProduct } from "react-icons/ai";

// const COUNTRY_OPTIONS = [
//   { code: 'US', flag: US, name: 'United States' },
//   { code: 'AE', flag: AE, name: 'United Arab Emirates' },
//   { code: 'AU', flag: AU, name: 'Australia' },
//   { code: 'CN', flag: CN, name: 'China' },
//   { code: 'DE', flag: DE, name: 'Germany' },
//   { code: 'DK', flag: DK, name: 'Denmark' },
//   { code: 'FR', flag: FR, name: 'France' },
//   { code: 'GB', flag: GB, name: 'United Kingdom' },
//   { code: 'IT', flag: IT, name: 'Italy' },
//   { code: 'RU', flag: RU, name: 'Russia' },
// ];



// const [selectedCountry, setSelectedCountry] = useState(COUNTRY_OPTIONS[0]);

function Header() {

  const [categories,setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const {data} = await api.get("/api/categories");
      console.log("Category",data);
      if(data?.success){
        setCategories(data?.categories);
      }
    } catch (error) {
      toast.error(data.message);
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCategories();
  },[]);

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
          <div className="flex-1 flex max-w-2xl border border-blue-500 rounded-r-lg rounded-l-lg focus:ring-blue-50">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-4 py-2 focus:outline-none "
            />
            <select className="px-1 py-2 border-l border-blue-500 bg-white text-gray-600 focus:outline-none">
              {categories.map((category) => (
                <option value={category.name} key={category._id}>{category.name}</option>
              ))}
            </select>
            <button className="px-6 cursor-pointer py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors">
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-gray-700">
              <FaUser className='w-5.5 h-5.5' />
              <span>Profile</span>
            </Link>
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
            <Link to="/cart" className='flex flex-col cursor-pointer text-gray-500 items-center hover:text-gray-700'>
              <IoMdCart className='w-5.5 h-5.5' />
              <span>My Cart</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Top bar */}
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
          English, USD
            <select className="flex items-center gap-1 text-gray-900 hover:text-gray-600">
              
              {/* <ChevronDown className="w-3 h-3" /> */}
            </select>
            Ship to
            {/* <select className="flex items-center gap-1 text-gray-900 hover:text-gray-600">
              {COUNTRY_OPTIONS.map((option) =>(
                <option key={option.value} value={option.value}><img src={option.flag} alt="US" className="w-4 h-3" /></option>
              ))}
              <ChevronDown className="w-3 h-3" />
            </select> */}
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;
