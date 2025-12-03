import React from 'react';
import { Clock } from 'lucide-react';

const products = [
  { id: 1, name: 'Smart watches', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop', discount: '-25%' },
  { id: 2, name: 'Laptops', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop', discount: '-15%' },
  { id: 3, name: 'GoPro cameras', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&h=200&fit=crop', discount: '-40%' },
  { id: 4, name: 'Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop', discount: '-25%' },
  { id: 5, name: 'Canon cameras', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop', discount: '-25%' }
];

function DealsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Deals and offers</h2>
          <div className="flex items-center gap-2">
            {[13, 34, 56, 12].map((num, idx) => (
              <div key={idx} className="bg-gray-700 text-white px-3 py-2 rounded text-sm font-mono">
                {num}
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative bg-gray-50 rounded-lg overflow-hidden mb-2 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              <p className="text-red-500 font-semibold">{product.discount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DealsSection;
