import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">

          {/* Bottom section */}
        <div className="border-t mr-20 border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
          {/* Logo and description */}
          <div className="flex items-start gap-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">TB</span>
            </div>
            <div className="max-w-xs">
              <h4 className="font-bold text-gray-900 mb-1">TradeBridge</h4>
              <p className="text-xs text-gray-600">
                Connecting global suppliers and buyers for seamless international trade
              </p>
              <div className="flex gap-2 mt-3">
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                  <Facebook className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                  <Twitter className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                  <Instagram className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                  <Youtube className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Find store</a></li>
              <li><a href="#" className="hover:text-blue-500">Categories</a></li>
              <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Partnership</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Find store</a></li>
              <li><a href="#" className="hover:text-blue-500">Categories</a></li>
              <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-500">Money Refund</a></li>
              <li><a href="#" className="hover:text-blue-500">Shipping</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact us</a></li>
            </ul>
          </div>

          {/* For users */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For users</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-500">Login</a></li>
              <li><a href="#" className="hover:text-blue-500">Register</a></li>
              <li><a href="#" className="hover:text-blue-500">Settings</a></li>
              <li><a href="#" className="hover:text-blue-500">My Orders</a></li>
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

        {/* Copyright */}
        <p className="text-sm text-gray-500">© 2025 TradeBridge.</p>

        {/* Language selector */}
        <div className="flex items-center gap-2">
          <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-5 h-4" />
          <span className="text-sm text-gray-600">English</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
