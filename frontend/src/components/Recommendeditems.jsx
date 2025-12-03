import React from 'react';

const products = [
  { name: 'T-shirts with multiple colors, for men', price: '$10.30', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop' },
  { name: 'Jeans shorts for men blue color', price: '$10.30', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop' },
  { name: 'Brown winter coat medium size', price: '$12.50', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200&h=200&fit=crop' },
  { name: 'Jeans bag for travel for men', price: '$34.00', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop' },
  { name: 'Leather wallet', price: '$99.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=200&h=200&fit=crop' },
  { name: 'Canon camera black, 100x zoom', price: '$9.99', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop' },
  { name: 'Headset for gaming with mic', price: '$8.99', image: 'https://images.unsplash.com/photo-1528148343865-51218c4a13e6?w=200&h=200&fit=crop' },
  { name: 'Smartwatch silver color modern', price: '$10.30', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
  { name: 'Blue wallet for men leather material', price: '$10.30', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=200&h=200&fit=crop' },
  { name: 'Jeans bag for travel for men', price: '$80.95', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop' }
];

function RecommendedItems() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended items</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-lg font-bold text-gray-900 mb-1">{product.price}</p>
              <p className="text-sm text-gray-600 line-clamp-2">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedItems;
