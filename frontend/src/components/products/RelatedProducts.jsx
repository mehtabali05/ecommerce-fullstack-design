import { useEffect, useState } from 'react';
import { api } from '../../api';
import { Link } from 'react-router-dom';
export default function RelatedProducts({productId,categoryId}) {
    const [relatedProducts,setRelatedProducts] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
      console.log("pId",productId);
      console.log("cId",categoryId);
      if(productId && categoryId) 
        getRelatedProducts();
    },[productId,categoryId]);

    const getRelatedProducts = async () => {
      try {
        setLoading(true);
        const {data} = await api.get(`/api/products/${productId}/${categoryId}`);
        console.log("Related Products",data);
        setRelatedProducts(data?.relatedProducts);
        setLoading(false);
      } catch (error) {
        console.error(error?.message);
        setLoading(false);
      }
    }
  
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        { loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Related products</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {relatedProducts.map((product) => (
              <Link to={`/product/${product._id}`} key={product._id} >
                <div className="group cursor-pointer">
                  <div className="flex items-center justify-center aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-[75%] h-[75%] object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xl text-gray-900 mb-1 group-hover:text-blue-500 transition">
                    {product.name}
                  </h4>
                  <p className="font-medium text-gray-500 text-xl">{product.price}</p>
                </div>
                </Link>  
              ))}
            </div>
          </div>
        )
        }
      </div>
    );
  }
  