import React from 'react';

function QuoteSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left side */}
          <div className="p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              An easy way to send<br />requests to all suppliers
            </h2>
            <p className="text-blue-50 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incididunt.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="bg-white p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Send quote to suppliers
            </h3>
            
            <input
              type="text"
              placeholder="What item you need?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Type more details"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="number"
                placeholder="Quantity"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Pcs</option>
                <option>Kg</option>
                <option>Liters</option>
              </select>
            </div>

            <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteSection;
