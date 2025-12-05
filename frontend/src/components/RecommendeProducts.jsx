export default function RecommendedProducts() {
    const products = [
      {
        id: 1,
        name: 'Men Blazers Sets Elegant Formal',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&h=200&fit=crop',
        price: '$7.00 - $99.50',
      },
      {
        id: 2,
        name: 'Men Shirt Sleeve Polo Contrast',
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&h=200&fit=crop',
        price: '$7.00 - $99.50',
      },
      {
        id: 3,
        name: 'Apple Watch Series Space Gray',
        image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200&h=200&fit=crop',
        price: '$7.00 - $99.50',
      },
      {
        id: 4,
        name: 'Basketball Crew Socks Long Stuff',
        image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=200&h=200&fit=crop',
        price: '$7.00 - $99.50',
      },
      {
        id: 5,
        name: "New Summer Men's castrol T-Shirts",
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=200&h=200&fit=crop',
        price: '$7.00 - $99.50',
      },
    ];
  
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">You may like</h3>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex gap-3 group cursor-pointer">
              <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-500 transition">
                  {product.name}
                </h4>
                <p className="text-sm font-medium text-gray-700">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  