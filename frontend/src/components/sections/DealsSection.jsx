import React from 'react';
import {dealsAndOffers} from '../../assets/asset';
import { Link } from 'react-router-dom';


function DealsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
       
        
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 border border-gray-200">
          <div className="flex flex-col p-4 mb-6">
            <h2 className="text-xl font-bold text-gray-900">Deals and offers</h2>
            <h2 className="text-md text-gray-600">Hygiene equipments</h2>
            <div className="flex items-center gap-2 mt-3">
              <div className="bg-gray-700 text-white px-3 py-2 rounded font-mono flex flex-col items-center">
                <span className='font-bold text-md'>4</span>
                <span>Days</span>
              </div>
              <div className="bg-gray-700 text-white px-3 py-2 rounded font-mono flex flex-col items-center">
                <span className='font-bold text-md'>13</span>
                <span>Hours</span>
              </div>
              <div className="bg-gray-700 text-white px-3 py-2 rounded font-mono flex flex-col items-center">
                <span className='font-bold text-md'>34</span>
                <span>Min</span>
              </div>
              <div className="bg-gray-700 text-white px-3 py-2 rounded font-mono flex flex-col items-center">
                <span className='font-bold text-md'>56</span>
                <span>Sec</span>
              </div>
            </div>
          </div>
          {dealsAndOffers.map((product) => (
            <Link to="/deals" key={product.id} className="group cursor-pointer flex flex-col items-center border-l border-gray-200 py-4">
                <img
                  src={product.image}
                  alt={product.category}
                  className="w-[80%] h-[80%] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              <h3 className="text-sm font-medium text-gray-900">{product.category}</h3>
              <p className="text-red-500 font-semibold bg-red-200 px-3 py-1 rounded-2xl mt-2"> - {product.discount} %</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DealsSection;
