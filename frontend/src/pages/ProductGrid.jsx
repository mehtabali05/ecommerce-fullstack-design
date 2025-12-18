import { useEffect, useState } from 'react';
import { Grid, List } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/products/ProductCard';
import ProductListView from '../components/products/ProductListView';
import Newsletter from '../components/NewsLetter';
import { api } from './../api';
 
export default function ProductGrid() {
  const [products,setProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState(['Samsung', 'Apple', 'Poco']);
  const [selectedFeatures, setSelectedFeatures] = useState(['Metallic']);
  const [activeFilters, setActiveFilters] = useState(['Samsung', 'Apple', 'Poco', 'Metallic', '4 star', '3 star']);
  const [viewMode, setViewMode] = useState('grid');

  const fetchProducts = async () => {
    try {
      const {data} = await api.get("/api/products");
      console.log("Grid Page data",data);
      if(data?.success){
        setProducts(data.products);
      }
    } catch (error) {
      console.error(error);   
    }
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
    if (selectedBrands.includes(filter)) {
      setSelectedBrands(selectedBrands.filter(b => b !== filter));
    }
    if (selectedFeatures.includes(filter)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== filter));
    }
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSelectedBrands([]);
    setSelectedFeatures([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex-1 max-w-[1400px] mx-auto px-4 py-6 w-full">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Clothings', href: '/clothings' },
            { label: "Men's wear", href: '/mens-wear' },
            { label: 'Summer clothing' },
          ]}
        />

        <div className="flex gap-6">
          <Sidebar
            selectedBrands={selectedBrands}
            onBrandsChange={setSelectedBrands}
            selectedFeatures={selectedFeatures}
            onFeaturesChange={setSelectedFeatures}
          />

          <div className="flex-1">
            {/* Header */}
            <div className="flex bg-white px-5 py-3 border border-gray-100 items-center justify-between mb-6">
              <h1 className="text-xl font-semibold">
                12,911 items in <span className="font-bold">Mobile accessory</span>
              </h1>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                  <span className="text-gray-700">Verified only</span>
                </label>
                <select className="px-4 py-2 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:border-blue-500">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
                <div className="flex gap-1 border border-gray-300 rounded">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-200"
                >
                  {filter}
                  <button onClick={() => removeFilter(filter)} className="hover:text-blue-800">
                    ×
                  </button>
                </span>
              ))}
              {activeFilters.length > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                >
                  Clear all filter
                </button>
              )}
            </div>

            {/* Products Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-3 gap-4 mb-8">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {products.map((product) => (
                  <ProductListView key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
           <div className='flex justify-end pr-8 mb-10'>
              <div className="flex items-center justify-center gap-2">
                <select className="px-3 py-2 border border-gray-300 rounded bg-white">
                  <option>Show 10</option>
                  <option>Show 20</option>
                  <option>Show 50</option>
                </select>
                <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  &lt;
                </button>
                <button className="px-3 py-2 bg-blue-500 text-white rounded">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  &gt;
                </button>
              </div>
           </div>
           
          </div>
        </div>
      </main>
          <Newsletter />
    </div>
  );
}
