import React from 'react';
import logo from '../../assets/Brand/logo-colored.svg'
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="border-t border-gray-200 mb-3">
      <div className="bg-white max-w-7xl mx-auto px-4 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-3 mb-8">

          {/* Bottom section */}
        
          {/* Logo and description */}
          <div className="flex items-start gap-3 mb-4 md:mb-0"> 
            <div className="max-w-xs">
              <img src={logo} alt="" />
              <p className="text-gray-600 mt-3 mb-3"> Best information about the company gies here but now lorem ipsum is</p>
              <div className="flex gap-2 mt-3">
                <Link to="https://facebook.com" className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <FaFacebookF  className='h-6 w-6'/>
                </Link>
                <Link to="https://twitter.com" className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <FiTwitter className='h-6 w-6' />
                </Link>
                <Link to="https://linkedin.com" className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <FaLinkedinIn className='h-6 w-6' />
                </Link>
                <Link to="https://instagram.com" className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <FaInstagram className='h-6 w-6' />
                </Link>
                <Link to="https://youtube.com" className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                  <AiOutlineYoutube className="w-6 h-6 text-gray-900" />
                </Link>
              </div>
            </div>
          </div>
       

          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/about-us" className="hover:text-blue-500">About Us</Link></li>
              <li><Link to="/find-store" className="hover:text-blue-500">Find store</Link></li>
              <li><Link to="/categories" className="hover:text-blue-500">Categories</Link></li>
              <li><Link to="/blogs" className="hover:text-blue-500">Blogs</Link></li>
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Partnership</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/about-us" className="hover:text-blue-500">About Us</Link></li>
              <li><Link to="/find-store" className="hover:text-blue-500">Find store</Link></li>
              <li><Link to="/categories" className="hover:text-blue-500">Categories</Link></li>
              <li><Link to="/blogs" className="hover:text-blue-500">Blogs</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/help-center" className="hover:text-blue-500">Help Center</Link></li>
              <li><Link to="/money-refund" className="hover:text-blue-500">Money Refund</Link></li>
              <li><Link to="/shipping" className="hover:text-blue-500">Shipping</Link></li>
              <li><Link to="/contact-us" className="hover:text-blue-500">Contact us</Link></li>
            </ul>
          </div>

          {/* For users */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For users</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/login" className="hover:text-blue-500">Login</Link></li>
              <li><Link to="/register" className="hover:text-blue-500">Register</Link></li>
              <li><Link to="/settings" className="hover:text-blue-500">Settings</Link></li>
              <li><Link to="/orders" className="hover:text-blue-500">My Orders</Link></li>
            </ul>
          </div>

          {/* Get app */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get app</h3>
            <div className="space-y-2">
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        
      </div>
      {/* Copyright */}
      <div className='bg-gray-100'>
        <div className='flex justify-between max-w-7xl p-4 mx-auto'>
          <p className="text-sm text-gray-500">© 2025 TradeBridge.</p>
          {/* Language selector */}
          <div className="flex items-center gap-2">
            <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-4" />
            <span className="text-sm text-gray-600">English</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
