import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import avatar from '../../assets/Brand/Avatar.png'
import banner from '../../assets/Brand/Banner.png'
import { useAuth } from '../../context/AuthContext';

function HeroSection() {
  const {auth} = useAuth();
  // console.log("Auth in Hero",auth?.user);
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-4 border border-gray-200 bg-white p-4">
        {/* Sidebar categories */}
        <div className="col-span-12 md:col-span-3 rounded-lg ">
          <nav className="space-y-1">
            {[
              'Automobiles',
              'Clothes and wear',
              'Home interiors',
              'Computer and tech',
              'Tools, equipments',
              'Sports and outdoor',
              'Animal and pets',
              'Machinery tools',
              'More category'
            ].map((category) => (
              <NavLink
                key={category}
                href="#"
                className="block text-gray-700 hover:bg-blue-100 p-2"
              >
                {category}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Main hero banner */}
        <div className="col-span-12 md:col-span-6">
          <div className="bg-gradient-to-br from-cyan-300 to-teal-200 rounded-lg p-8 h-full relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl text-gray-900 mb-2">
                Latest trending
              </h1>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Electronic items
              </h2>
              <Link to="/about-us" className="px-6 mt-5 cursor-pointer py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Learn more
              </Link>
            </div>
            <img
              src={banner}
              alt="Electronics"
              className="absolute right-0 top-0 h-full object-cover opacity-80"
            />
          </div>
        </div>

        {/* Right sidebar */}
        <div className="col-span-12 md:col-span-3 space-y-4">
          {/* User section */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                {/* <span className="text-gray-600 text-sm">👤</span> */}
                <img src={avatar} alt="" />
              </div>
              <div>
                <p className="text-gray-900">Hi, user</p>
                <p className="text-gray-900">let's get started</p>
              </div>
            </div>
            <Link to="/register">
              <button className="w-full py-2 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-2">
                Join now
              </button>
            </Link>
            <Link to="/login">
              <button className="w-full cursor-pointer py-2 bg-white text-blue-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-300">
                Log in
              </button>
            </Link>
          </div>

          {/* Promo box */}
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg p-4 text-white">
            <p className="mb-1">Get US $10 off</p>
            <p className="opacity-90">with a new supplier</p>
          </div>

          {/* Quote box */}
          <div className="bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg p-4 text-white">
            <p className="mb-1">Send quotes with</p>
            <p className="opacity-90">supplier preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;