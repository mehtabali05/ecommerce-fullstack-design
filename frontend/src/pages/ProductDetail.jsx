// import Header from '@/react-app/components/Header';
// import Breadcrumb from '@/react-app/components/Breadcrumb';
// import ProductGallery from '@/react-app/components/ProductGallery';
// import ProductInfo from '@/react-app/components/ProductInfo';
// import SupplierCard from '@/react-app/components/SupplierCard';
// import ProductTabs from '@/react-app/components/ProductTabs';
// import RecommendedProducts from '@/react-app/components/RecommendedProducts';
// import RelatedProducts from '@/react-app/components/RelatedProducts';
// import PromoBanner from '@/react-app/components/PromoBanner';
// import Footer from '@/react-app/components/Footer';

import Breadcrumb from "../components/Breadcrumb";
import ProductGallery from "../components/Productgallery";
import ProductInfo from "../components/ProductInfo";
import ProductTabs from "../components/ProductTabs";
import PromoBanner from "../components/PromoBanner";
import RecommendedProducts from "../components/RecommendeProducts";
import RelatedProducts from "../components/RelatedProducts";
import SupplierCard from "../components/SupplierCard";

export default function ProductDetail() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* First row: Product gallery/info + Supplier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-9">
            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <ProductGallery />
                <ProductInfo />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <SupplierCard />
          </div>
        </div>

        {/* Second row: Product tabs + You may like */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-9">
            <ProductTabs />
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
