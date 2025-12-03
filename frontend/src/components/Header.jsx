import React from 'react';
import { Search, User, Heart, ShoppingCart, Menu, ChevronDown } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
            {/* Main header */}
            <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TB</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TradeBridge</span>
          </div>

          {/* Search bar */}
          <div className="flex-1 flex max-w-2xl">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-600 focus:outline-none">
              <option>All category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
            </select>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors">
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Top bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Menu className="w-4 h-4" />
              <span>All category</span>
            </button>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Hot offers</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Gift boxes</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Menu item</a>
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                Help
                <ChevronDown className="w-3 h-3" />
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
              English, USD
              <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
              Ship to
              <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-4 h-3" />
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
