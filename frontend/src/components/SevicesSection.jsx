import React from 'react';
import { Search, FileText, Plane, Shield } from 'lucide-react';
import service1 from '../assets/Image/services/service1.png'
import service2 from '../assets/Image/services/service2.png'
import service3 from '../assets/Image/services/service3.png'
import service4 from '../assets/Image/services/service4.png'

const services = [
  {
    title: 'Source from Industry Hubs',
    icon: Search,
    image: service1
  },
  {
    title: 'Customize Your Products',
    icon: FileText,
    image: service2
  },
  {
    title: 'Fast, reliable shipping by ocean or air',
    icon: Plane,
    image: service3
  },
  {
    title: 'Product monitoring and inspection',
    icon: Shield,
    image: service4 
  }
];

function ServicesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our extra services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={idx} className="relative rounded-lg overflow-hidden group cursor-pointer h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-white font-semibold text-sm">{service.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesSection;
