import { ChevronRight } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-2 text-gray-600 overflow-x-auto whitespace-nowrap">
          <a href="/" className="hover:text-blue-500 transition">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a href="#" className="hover:text-blue-500 transition">Clothings</a>
          <ChevronRight className="w-4 h-4" />
          <a href="#" className="hover:text-blue-500 transition">Men's wear</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Summer clothing</span>
        </div>
      </div>
    </div>
  );
}