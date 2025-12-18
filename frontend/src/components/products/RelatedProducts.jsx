export default function RelatedProducts() {
    const products = [
      {
        id: 1,
        name: 'Xiaomi Redmi 8 Original',
        image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=300&h=300&fit=crop',
        price: '$32.00-$40.00',
      },
      {
        id: 2,
        name: 'Xiaomi Redmi 8 Original',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop',
        price: '$32.00-$40.00',
      },
      {
        id: 3,
        name: 'Xiaomi Redmi 8 Original',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
        price: '$32.00-$40.00',
      },
      {
        id: 4,
        name: 'Xiaomi Redmi 8 Original',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop',
        price: '$32.00-$40.00',
      },
      {
        id: 5,
        name: 'Xiaomi Redmi 8 Original',
        image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop',
        price: '$32.00-$40.00',
      },
      {
        id: 6,
        name: 'Xiaomi Redmi 8 Original',
        image: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?w=300&h=300&fit=crop',
        price: '$32.00-$40.00',
      },
    ];
  
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Related products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="flex items-center justify-center aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[75%] h-[75%] object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl text-gray-900 mb-1 group-hover:text-blue-500 transition">
                {product.name}
              </h4>
              <p className="font-medium text-gray-500 text-xl">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  