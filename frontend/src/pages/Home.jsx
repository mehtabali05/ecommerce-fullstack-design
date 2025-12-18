import React from 'react';
import { categoryElectronic,categoryHomeAndOutdoor,home,smart } from '../assets/asset';
import HeroSection from '../components/sections/HeroSection';
import DealsSection from '../components/sections/DealsSection';
import CategorySection from '../components/sections/CategorySection';
import QuoteSection from '../components/sections/QuoteSection';
import ServicesSection from '../components/sections/SevicesSection';
import SuppliersSection from '../components/supplier/SuppliersSection';
import RecommendedItems from '../components/products/Recommendeditems';
import Newsletter from '../components/NewsLetter';

function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <DealsSection/>
      <CategorySection
        title="Home and outdoor"
        bgColor="bg-gradient-to-br from-amber-0 to-orange-100"
        bgImage={home}
        products={categoryHomeAndOutdoor}
      />
      <CategorySection
        title="Consumer electronics and gadgets"
        bgColor="bg-gradient-to-br from-blue-50 to-cyan-100"
        bgImage={smart}
        products={categoryElectronic}
      />
      <QuoteSection />
      <RecommendedItems />
      <ServicesSection />
      <SuppliersSection />
      <Newsletter />
    </div>
  );
}

export default Home;
