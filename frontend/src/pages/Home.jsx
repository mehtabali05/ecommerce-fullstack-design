import React from 'react';
import HeroSection from '../components/HeroSection';
import DealsSection from '../components/DealsSection';
import CategorySection from '../components/CategorySection';
import QuoteSection from '../components/QuoteSection';
import RecommendedItems from '../components/Recommendeditems';
import ServicesSection from '../components/SevicesSection';
import SuppliersSection from '../components/SuppliersSection';
import Newsletter from '../components/NewsLetter';

import { categoryElectronic,categoryHomeAndOutdoor } from '../assets/asset';

function Home() {
  // const homeProducts = [
  //   { name: 'Soft chairs', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop' },
  //   { name: 'Sofa & chair', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop' },
  //   { name: 'Kitchen dishes', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1584085368886-0c2d17bd571b?w=200&h=200&fit=crop' },
  //   { name: 'Smart watches', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
  //   { name: 'Kitchen mixer', price: 'From USD 100', image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=200&h=200&fit=crop' },
  //   { name: 'Blenders', price: 'From USD 39', image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=200&h=200&fit=crop' },
  //   { name: 'Home appliance', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=200&h=200&fit=crop' },
  //   { name: 'Coffee maker', price: 'From USD 10', image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=200&h=200&fit=crop' }
  // ];

  // const electronicsProducts = [
  //   { name: 'Smart watches', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
  //   { name: 'Cameras', price: 'From USD 89', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop' },
  //   { name: 'Headphones', price: 'From USD 10', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
  //   { name: 'Smart watches', price: 'From USD 90', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&h=200&fit=crop' },
  //   { name: 'Gaming set', price: 'From USD 35', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=200&h=200&fit=crop' },
  //   { name: 'Laptops & PC', price: 'From USD 340', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop' },
  //   { name: 'Smartphones', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop' },
  //   { name: 'Electric kettle', price: 'From USD 240', image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=200&h=200&fit=crop' }
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <DealsSection />
      <CategorySection
        title="Home and outdoor"
        bgColor="bg-gradient-to-br from-amber-50 to-orange-100"
        bgImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=300&fit=crop"
        products={categoryHomeAndOutdoor}
      />
      <CategorySection
        title="Consumer electronics and gadgets"
        bgColor="bg-gradient-to-br from-blue-50 to-cyan-100"
        products={categoryElectronic}
      />
      <QuoteSection />
      <RecommendedItems />
      <ServicesSection />
      <SuppliersSection />
      <Newsletter />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
