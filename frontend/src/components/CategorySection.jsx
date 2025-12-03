import React from 'react';

function CategorySection({ title, bgColor, bgImage, products }) {
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
            <button className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
              Source now
            </button>
          </div>
        </div>

        {/* Products grid */}
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="bg-gray-50 rounded-lg mb-3 aspect-square flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
