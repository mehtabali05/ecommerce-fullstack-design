import { useEffect, useState } from 'react';
import { Grid, List } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/products/ProductCard';
import ProductListView from '../components/products/ProductListView';
// import { products } from '../data/products';
import Newsletter from '../components/NewsLetter';
import { api } from './../api';
 
export default function Products() {
  const [products,setProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState(['Samsung', 'Apple', 'Poco']);
  const [selectedFeatures, setSelectedFeatures] = useState(['Metallic']);
  const [activeFilters, setActiveFilters] = useState(['Samsung', 'Apple', 'Poco', 'Metallic', '4 star', '3 star']);
  const [viewMode, setViewMode] = useState('grid');
  const [sort, setSort] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState(null);

//   // --- PAGINATION STATES ---
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
//   // -------------------------
 
//   // Updated Fetch logic with query params
  // const fetchProducts = async () => {
  //   try {
  //     const { data } = await api.get(`/api/products?page=${page}&limit=${limit}&sort=${sort}`);
  //     if (data.success) {
  //       setProducts(data.products);
  //       setTotalPages(data.totalPages);
  //       setTotalItems(data.totalCount);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchProducts = async () => {
    try {
      const query = new URLSearchParams({
        page,
        limit,
        sort,
        ...(selectedCategory && { category: selectedCategory })
      }).toString();
  
      const { data } = await api.get(`/api/products?${query}`);
  
      if (data.success) {
        setProducts(data.products);
        setTotalPages(data.totalPages);
        setTotalItems(data.totalCount);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    fetchProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }, [page, limit,sort,selectedCategory]); // Re-run when page or limit changes

  // const fetchProducts = async () => {
  //   try {
  //     const {data} = await api.get("/api/products");
  //     console.log(data);
  //     if(data.success){
  //       setProducts(data.products);
  //     }
  //   } catch (error) {
  //     console.error(error);
      
  //   }
  // }

  // useEffect(()=>{
  //   fetchProducts();
  // },[])

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
            selectedCategory={selectedCategory}
            onCategoryChange={(categoryId) => {
              setSelectedCategory(categoryId);
              setPage(1); // reset pagination on category change
            }}
            selectedBrands={selectedBrands}
            onBrandsChange={setSelectedBrands}
            selectedFeatures={selectedFeatures}
            onFeaturesChange={setSelectedFeatures}
          />

          <div className="flex-1">
            {/* Header */}
            <div className="flex bg-white px-5 py-3 border border-gray-100 items-center justify-between mb-6">
              <h1 className="text-xl font-semibold">
              {totalItems} <span className="font-bold">Mobile accessory</span>
              </h1>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                  <span className="text-gray-700">Verified only</span>
                </label>
                <select 
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value);
                    setPage(1); // reset pagination on sort
                  }}
                  className="px-4 py-2 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:border-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="newest">Newest</option>
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
                <select 
                  value={limit}
                  onChange={(e) => {setLimit(Number(e.target.value)); setPage(1);}}
                  className="px-3 py-2 border border-gray-300 rounded bg-white"
                >
                  <option value={10}>Show 10</option>
                  <option value={20}>Show 20</option>
                  <option value={30}>Show 30</option>
                </select>
                <button 
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                  >
                  &lt;
                </button>
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setPage(pageNumber)}
                      className={`px-3 py-2 rounded ${
                        page === pageNumber
                          ? "bg-blue-500 text-white"
                          : "border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
                <button 
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                  className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                  >
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

