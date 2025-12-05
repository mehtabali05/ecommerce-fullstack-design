import { Star, MessageCircle, ShoppingBag, CheckCircle2 } from 'lucide-react';

export default function ProductInfo() {
  return (
    <div className="space-y-6">
      {/* Stock status */}
      <div className="flex items-center gap-2 text-green-600">
        <CheckCircle2 className="w-5 h-5" />
        <span className="font-medium">In stock</span>
      </div>

      {/* Product title */}
      <h1 className="text-2xl font-semibold text-gray-900">
        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
      </h1>

      {/* Rating and reviews */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((star) => (
            <Star key={star} className="w-5 h-5 fill-orange-400 text-orange-400" />
          ))}
          <Star className="w-5 h-5 fill-orange-200 text-orange-200" />
          <span className="ml-2 text-orange-500 font-medium">9.3</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">32 reviews</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <ShoppingBag className="w-4 h-4" />
          <span className="text-sm">154 sold</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        <div className="space-y-1">
          <div className="text-3xl font-bold text-red-500">$98.00</div>
          <div className="text-sm text-gray-500">50-100 pcs</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-semibold text-gray-700">$90.00</div>
          <div className="text-sm text-gray-500">100-700 pcs</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-semibold text-gray-700">$78.00</div>
          <div className="text-sm text-gray-500">700+ pcs</div>
        </div>
      </div>

      {/* Product details */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="flex gap-4">
          <span className="w-32 text-gray-600">Price:</span>
          <span className="text-gray-900">Negotiable</span>
        </div>
        <div className="flex gap-4">
          <span className="w-32 text-gray-600">Type:</span>
          <span className="text-gray-900">Classic shoes</span>
        </div>
        <div className="flex gap-4">
          <span className="w-32 text-gray-600">Material:</span>
          <span className="text-gray-900">Plastic material</span>
        </div>
        <div className="flex gap-4">
          <span className="w-32 text-gray-600">Design:</span>
          <span className="text-gray-900">Modern nice</span>
        </div>
        <div className="flex gap-4">
          <span className="w-32 text-gray-600">Customization:</span>
          <span className="text-gray-900">Customized logo and design custom packages</span>
        </div>
        <div className="flex gap-4">
          <span className="w-32 text-gray-600">Protection:</span>
          <span className="text-gray-900">Refund Policy</span>
        </div>
        <div className="flex gap-4">
          <span className="w-32 text-gray-600">Warranty:</span>
          <span className="text-gray-900">2 years full warranty</span>
        </div>
      </div>
    </div>
  );
}