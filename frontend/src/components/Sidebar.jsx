import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { toast } from 'react-hot-toast';

export default function Sidebar({ selectedCategory,onCategoryChange, selectedBrands, onBrandsChange, selectedFeatures, onFeaturesChange }) {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllConditions, setShowAllConditions] = useState(false);
  const [showAllRatings, setShowAllRatings] = useState(false);

  const [categories,setCategories] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [loading,setLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const {data} = await api.get("/api/categories");
      console.log("Sidebar category",data);
      if(data?.success){
        setCategories(data.categories);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  },[]);

  // const categories = ['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'];
  const brands = ['Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo'];
  const features = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'];
  const conditions = ['Any', 'Refurbished', 'Brand new', 'Old items'];
  const ratings = [5, 4, 3, 2];

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

  const handleCategoryClick = (category) => {
    if (selectedCategory === category._id) {
      onCategoryChange(null); // unselect
    } else {
      onCategoryChange(category._id);
    }
  };

  const displayedCategories = showAllCategories ? categories : categories.slice(0, 5);
  const displayedBrands = showAllBrands ? brands : brands.slice(0, 0);
  const displayedFeatures = showAllFeatures ? features : features.slice(0, 0);
  const displayedConditions = showAllConditions ? conditions : conditions.slice(0, 0);
  const displayedRatings = showAllRatings ? ratings : ratings.slice(0, 0);

  return (
    <div className="w-64 flex-shrink-0">
      {/* Category */}
      <div className="mb-6">
        <button className="flex cursor-pointer items-center justify-between w-full mb-3 mt-2 text-xl font-semibold">
          <span>Category</span>
          {showAllCategories ? <ChevronUp className="w-4 h-4" onClick={() => setShowAllCategories(!showAllCategories)} /> : <ChevronDown className="w-4 h-4" onClick={() => setShowAllCategories(!showAllCategories)} />}
        </button>
        <ul className="space-y-2">
          {displayedCategories.map((category) => (
            <li key={category._id}>
              <button
                onClick={() => handleCategoryClick(category)}
                className={`text-left w-full cursor-pointer ${
                  selectedCategory === category._id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {category.name}
              </button>
            </li>
          ))}

          {categories.length > 5 && (
            <li>
              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="text-blue-500 cursor-pointer hover:text-blue-600 font-medium"
              >
                {showAllCategories ? "Show less" : "See all"}
              </button>
            </li>
          )}
        </ul>

      </div>

      {/* Brands */}
      <div className="mb-6">
        <button className="flex items-center justify-between w-full mb-3 mt-2 text-xl font-semibold">
          <span>Brands</span>
          {showAllBrands ? <ChevronUp className="w-4 h-4" onClick={() => setShowAllBrands(!showAllBrands)} /> : <ChevronDown className="w-4 h-4" onClick={() => setShowAllBrands(!showAllBrands)} />}
        </button>
        <ul className="space-y-2">
          {displayedBrands.slice(0, showAllBrands ? brands.length : 0).map((brand) => (
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
          {showAllFeatures ? <ChevronUp className="w-4 h-4" onClick={() => setShowAllFeatures(!showAllFeatures)} /> : <ChevronDown className="w-4 h-4" onClick={() => setShowAllFeatures(!showAllFeatures)} />}
        </button>
        <ul className="space-y-2">
          {displayedFeatures.slice(0, showAllFeatures ? features.length : 0).map((feature) => (
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
          {showAllConditions ? <ChevronUp className="w-4 h-4" onClick={() => setShowAllConditions(!showAllConditions)} /> : <ChevronDown className="w-4 h-4" onClick={() => setShowAllConditions(!showAllConditions)} />}
        </button>
        <ul className="space-y-2 text-sm">
          {displayedConditions.slice(0, showAllConditions ? conditions.length : 0).map((condition) => (
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
          <li>
            <button
              onClick={() => setShowAllConditions(!showAllConditions)}
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              {showAllConditions ? 'See less' : 'See all'}
            </button>
          </li>
        </ul>
      </div>

      {/* Ratings */}
      <div className="mb-6">
        <button className="flex items-center justify-between w-full mb-3 font-semibold">
          <span>Ratings</span>
          {showAllRatings ? <ChevronUp className="w-4 h-4" onClick={() => setShowAllRatings(!showAllRatings)} /> : <ChevronDown className="w-4 h-4" onClick={() => setShowAllRatings(!showAllRatings)} />}
        </button>
        <ul className="space-y-2 text-sm">
          {displayedRatings.slice(0, showAllRatings ? ratings.length : 0).map((rating) => (
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

          <li>
            <button
              onClick={() => setShowAllRatings(!showAllRatings)}
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              {showAllRatings ? 'See less' : 'See all'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
