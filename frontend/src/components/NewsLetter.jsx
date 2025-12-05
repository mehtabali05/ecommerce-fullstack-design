import React from 'react';
// import { MdOutlineMailOutline } from "react-icons/md";
function Newsletter() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Subscribe on our newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        
        <div className="flex max-w-md mx-auto gap-2">
        {/* <MdOutlineMailOutline /> */}
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
