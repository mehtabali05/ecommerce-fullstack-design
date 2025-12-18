import Breadcrumb from "../components/Breadcrumb";
import ProductGallery from "../components/products/ProductGallery";
import ProductInfo from "../components/products/ProductInfo";
import ProductTabs from "../components/products/ProductTabs";
import PromoBanner from "../components/PromoBanner";
import RecommendedProducts from "../components/products/RecommendeProducts";
import RelatedProducts from "../components/products/RelatedProducts";
import SupplierCard from "../components/supplier/SupplierCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../api";
 
export default function ProductDetail() {
  const {id} = useParams();
  console.log("ProductId",id);

  const [product,setProduct] = useState({});
  
  const fetchProduct = async () => {
    try {
      const {data} = await api.get(`/api/products/${id}`);
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
  },[id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* First row: Product gallery/info + Supplier */}
        <div className="grid bg-white border border-gray-200 grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-9 ">
            <div className="rounded-lg p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <ProductGallery pId={id} className="w-95 h-95" />
                <ProductInfo pId={id} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-5">
            <SupplierCard />
          </div>
        </div>

        {/* Second row: Product tabs + You may like */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-9">
            <ProductTabs description={product.description} />
          </div>

          <div className="lg:col-span-3">
            <RecommendedProducts />
          </div>
        </div>

        {/* Third row: Related products */}
        <RelatedProducts />

        {/* Promo banner */}
        <div className="mt-8">
          <PromoBanner />
        </div>
      </div>
    </div>
  );
}
