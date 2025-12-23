import React from 'react';
import { Link } from 'react-router-dom';


function CategorySection({ title, bgColor, bgImage,products}) { 
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-4">
        {/* Category banner */}
        <div className={`col-span-12 md:col-span-3 ${bgColor} rounded-lg p-6 relative overflow-hidden`}>
          {bgImage && (
            <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          )}
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
            <Link to="/products" className="px-4 py-2 mt-5 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer font-medium">
              Source now
            </Link>
          </div>
        </div>

        {/* Products grid */}
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {products.map((product, idx) => (
              <div key={idx} className="flex justify-between bg-white gap-2 border border-gray-200 p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-gray-500">From <br />{product.description}</p>
                </div>
                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
