import React, { useEffect, useState } from 'react';
import { api } from '../../api';
import { Link, useSearchParams } from 'react-router-dom';

function RecommendedItems() {
  const [products,setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [sort, setSort] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const fetchProducts = async () => {
    try {
      const query = new URLSearchParams({
        page,
        limit,
        sort,
        ...(selectedCategory && { category: selectedCategory }),
        ...(search && { search }),
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
  }, [page, limit,sort,selectedCategory,search]); 

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended items</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {products.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id} >
            <div  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                <img src={product.mainImage} alt={product.name} className="w-[80%] h-[80%] object-cover" />
              </div>
              <div className="p-4">
                <p className="text-lg font-bold text-gray-900 mb-1">{product.price}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{product.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecommendedItems;
