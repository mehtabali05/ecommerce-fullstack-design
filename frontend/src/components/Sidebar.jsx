import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar({ selectedBrands, onBrandsChange, selectedFeatures, onFeaturesChange }) {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const categories = ['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'];
  const brands = ['Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo'];
  const features = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'];

  const handleBrandToggle = (brand) => {
    if (selectedBrands.includes(brand)) {
      onBrandsChange(selectedBrands.filter(b => b !== brand));
    } else {
      onBrandsChange([...selectedBrands, brand]);
    }
  };

  const handleFeatureToggle = (feature) => {
    if (selectedFeatures.includes(feature)) {
      onFeaturesChange(selectedFeatures.filter(f => f !== feature));
    } else {
      onFeaturesChange([...selectedFeatures, feature]);
    }
  };

  return (
    <div className="w-64 flex-shrink-0">
      {/* Category */}
      <div className="mb-6">
        <button className="flex items-center justify-between w-full mb-3 mt-2 text-xl font-semibold">
          <span>Category</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button className="text-gray-700 hover:text-blue-500">{category}</button>
            </li>
          ))}
          <li>
            <button className="text-blue-500 hover:text-blue-600 font-medium">See all</button>
          </li>
        </ul>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <button className="flex items-center justify-between w-full mb-3 mt-2 text-xl font-semibold">
          <span>Brands</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <ul className="space-y-2">
          {brands.slice(0, showAllBrands ? brands.length : 4).map((brand) => (
            <li key={brand} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
                className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={`brand-${brand}`} className="text-gray-700 cursor-pointer">
                {brand}
              </label>
            </li>
          ))}
          <li>
            <button
              onClick={() => setShowAllBrands(!showAllBrands)}
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              {showAllBrands ? 'See less' : 'See all'}
            </button>
          </li>
        </ul>
      </div>

      {/* Features */}
      <div className="mb-6">
        <button className="flex items-center justify-between w-full mb-3 mt-2 text-xl font-semibold">
          <span>Features</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <ul className="space-y-2">
          {features.slice(0, showAllFeatures ? features.length : 4).map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`feature-${feature}`}
                checked={selectedFeatures.includes(feature)}
                onChange={() => handleFeatureToggle(feature)}
                className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={`feature-${feature}`} className="text-gray-700 cursor-pointer">
                {feature}
              </label>
            </li>
          ))}
          <li>
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              {showAllFeatures ? 'See less' : 'See all'}
            </button>
          </li>
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <button className="flex items-center justify-between w-full mb-3 font-semibold">
          <span>Price range</span>
          <ChevronUp className="w-4 h-4" />
        </button>
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="w-full py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-50 text-sm font-medium">
            Apply
          </button>
        </div>
      </div>

      {/* Condition */}
      <div className="mb-6">
        <button className="flex items-center justify-between w-full mb-3 font-semibold">
          <span>Condition</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <ul className="space-y-2 text-sm">
          {['Any', 'Refurbished', 'Brand new', 'Old items'].map((condition) => (
            <li key={condition} className="flex items-center gap-2">
              <input
                type="radio"
                id={`condition-${condition}`}
                name="condition"
                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={`condition-${condition}`} className="text-gray-700 cursor-pointer">
                {condition}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Ratings */}
      <div className="mb-6">
        <button className="flex items-center justify-between w-full mb-3 font-semibold">
          <span>Ratings</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <ul className="space-y-2 text-sm">
          {[5, 4, 3, 2].map((rating) => (
            <li key={rating} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`rating-${rating}`}
                className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={`rating-${rating}`} className="text-gray-700 cursor-pointer flex items-center gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                  <span key={i} className="text-orange-400">★</span>
                ))}
                {Array.from({ length: 5 - rating }).map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
