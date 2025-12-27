import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { api } from '../../api';
import { useCart } from '../../context/CartContext';

export default function ProductGallery({pId}) {
  const [product,setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [mainImage,setMainImage] = useState("");
  const { addToCart} = useCart();

  const fetchProduct = async () => {
    try {
      const {data} = await api.get(`/api/products/${pId}`);
      console.log("Single Product Data",data);
      if(data?.success){
        setProduct(data.product);
        setMainImage(data.product.mainImage);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if(pId)
    fetchProduct();
  },[pId]);

  if (!product) return <div className="p-7 text-center text-gray-500">Loading Gallery...</div>;
 
  return (
    <div className="space-y-4 p-7">
      {/* Main image */}
      <div className="flex items-center justify-center aspect-square border border-gray-300 rounded-lg overflow-hidden">
        <img
          src={mainImage}
          alt="Product"
          className="w-[80%] h-[85%] "
        />
      </div>

      {/* Thumbnail gallery */}
      <div className="grid grid-cols-6 gap-2">
        {product?.images?.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setMainImage(image);
              setSelectedImageIndex(index);
            }}
            className={`w-15 cursor-pointer h-20 aspect-square border border-gray-300 rounded border-2 flex items-center justify-center  overflow-hidden transition ${
              selectedImageIndex === index ? 'border-blue-500' : 'border-transparent hover:border-gray-500'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-[90%] h-[90%] object-contain"
            />
          </button>
        ))}
      </div>
      <button onClick={() => addToCart(product._id)} className="w-full cursor-pointer bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition font-medium">Add to Cart</button>
    </div>
  );
}