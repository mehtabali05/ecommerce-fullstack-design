import React from 'react';

const suppliers = [
  { country: 'Arabic Emirates', flag: 'ae', city: 'shopname.ae' },
  { country: 'Australia', flag: 'au', city: 'shopname.com.au' },
  { country: 'United States', flag: 'us', city: 'shopname.com' },
  { country: 'Russia', flag: 'ru', city: 'shopname.ru' },
  { country: 'Italy', flag: 'it', city: 'shopname.it' },
  { country: 'Denmark', flag: 'dk', city: 'shopname.com.dk' },
  { country: 'France', flag: 'fr', city: 'shopname.com.fr' },
  { country: 'Arabic Emirates', flag: 'ae', city: 'shopname.ae' },
  { country: 'China', flag: 'cn', city: 'shopname.cn' },
  { country: 'Great Britain', flag: 'gb', city: 'shopname.co.uk' }
];

function SuppliersSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Suppliers by region</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {suppliers.map((supplier, idx) => (
          <div key={idx} className="flex items-center gap-3 group cursor-pointer">
            <img
              src={`https://flagcdn.com/w40/${supplier.flag}.png`}
              alt={supplier.country}
              className="w-8 h-6 object-cover rounded"
            />
            <div>
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-500">
                {supplier.country}
              </h3>
              <p className="text-xs text-gray-500">{supplier.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuppliersSection;
