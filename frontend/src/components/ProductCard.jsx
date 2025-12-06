import { Heart } from 'lucide-react';
import { Link } from 'react-router';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow group w-[90%]"
    >
      <div className="relative mb-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-40 h-60 object-cover rounded"
        />
        
      </div>

      <div className="space-y-2 relative">
          <button className="absolute top-2 right-2 p-2 bg-white border border-gray-300 rounded-md shadow hover:bg-gray-50">
              <Heart className="w-5 h-5 text-blue-600" />
          </button>

          <div className='flex flex-col '>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1">
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
              <span className="text-md text-orange-500 font-medium">{product.rating.toFixed(1)}</span>
            </div>
          </div>

        <h3 className=" text-xl text-gray-500 group-hover:text-blue-500 line-clamp-2 min-h-[48px]">
          {product.name}
        </h3>
      </div>
    </Link>
  );
}