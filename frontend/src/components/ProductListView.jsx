import { Heart, ShoppingCart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

export default function ProductListView({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow flex gap-4 group"
    >
      <div className="relative flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-48 h-48 object-cover rounded"
        />
        
      </div>

      <div className="flex justify-between relative">
        <div>
          <h3 className="text-lg font-medium group-hover:text-blue-500 mb-2">
            {product.name}
          </h3>

          {/* Price Section */}
          <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-gray-400 line-through text-sm">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  {/* <span className="text-red-500 text-sm font-medium">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span> */}
                </>
              )}
            </div>
            {/* <div className="flex items-center gap-2 text-sm text-gray-600">
              <MessageCircle className="w-4 h-4" />
              <span>Free shipping</span>
            </div> */}
          </div>

          {/* <button className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-medium">
            <ShoppingCart className="w-4 h-4" />
            Add to cart
          </button> */}
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < Math.floor(product.rating / 2) ? 'text-orange-400 text-xl' : 'text-gray-300 text-xl'}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-orange-500 font-medium">{product.rating.toFixed(1)}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{product.reviews} orders</span>
            <span className="text-gray-400">•</span>
            <span className='text-[#00B517]'>Free shipping</span>
          </div>

          <p className="text-gray-600 mb-3 line-clamp-2 pr-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <button className='text-blue-500 cursor-pointer'>View details</button>
        </div>

        <button className="absolute top-2 right-2 p-2 bg-white rounded-md border border-gray-300 shadow hover:bg-gray-50">
          <Heart className="w-5 h-5 text-blue-600" />
        </button>
      </div>
    </Link>
  );
}
