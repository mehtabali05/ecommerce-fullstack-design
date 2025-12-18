import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { api } from '../../api';

export default function ProductGallery({pId}) {
  const [product,setProduct] = useState({});
  const fetchProduct = async () => {
    try {
      const {data} = await api.get(`/api/products/${pId}`);
      console.log("Single Product Data",data);
      if(data?.success){
        setProduct(data.product);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchProduct();
  },[pId]);

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4 p-7">
      {/* Main image */}
      <div className="flex items-center justify-center aspect-square border border-gray-300 rounded-lg overflow-hidden">
        <img
          src={product.mainImage}
          alt="Product"
          className="w-[90%] h-[90%] "
        />
      </div>

      {/* Thumbnail gallery */}
      <div className="grid grid-cols-6 gap-3">
        {product?.images?.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 aspect-square border border-gray-300 p-1 rounded border-2 flex items-center justify-center  overflow-hidden transition ${
              selectedImage === index ? 'border-blue-500' : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-[90%] h-[90%] object-contain p-3"
            />
          </button>
        ))}
      </div>
    </div>
  );
}