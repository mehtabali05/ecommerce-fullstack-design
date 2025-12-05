import { CheckCircle2, Globe, Heart } from 'lucide-react';

export default function SupplierCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
      {/* Supplier header */}
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 font-semibold text-lg">R</span>
        </div>
        <div>
          <div className="text-sm text-gray-600">Supplier</div>
          <div className="font-semibold text-gray-900">Guanjoi Trading LLC</div>
        </div>
      </div>

      {/* Supplier details */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-700">
          <img src="https://flagcdn.com/w20/de.png" alt="Germany" className="w-5 h-3" />
          <span className="text-sm">Germany, Berlin</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span className="text-sm">Verified Seller</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Globe className="w-4 h-4" />
          <span className="text-sm">Worldwide shipping</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="space-y-2 pt-4">
        <button className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition font-medium">
          Send inquiry
        </button>
        <button className="w-full border border-blue-500 text-blue-500 py-3 rounded hover:bg-blue-50 transition font-medium">
          Seller's profile
        </button>
      </div>

      {/* Save for later */}
      <button className="w-full flex items-center justify-center gap-2 text-blue-500 hover:text-blue-600 transition pt-2">
        <Heart className="w-4 h-4" />
        <span className="text-sm font-medium">Save for later</span>
      </button>
    </div>
  );
}
