import { useState } from 'react';

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop',
  ];

  return (
    <div className="space-y-4 p-7">
      {/* Main image */}
      <div className="flex items-center justify-center aspect-square border border-gray-300 rounded-lg overflow-hidden">
        <img
          src={images[selectedImage]}
          alt="Product"
          className="w-[90%] h-[90%] "
        />
      </div>

      {/* Thumbnail gallery */}
      <div className="grid grid-cols-6 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 aspect-square border border-gray-300 p-1 rounded border-2 flex items-center justify-center  overflow-hidden transition ${
              selectedImage === index ? 'border-blue-500' : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-[90%] h-[90%] object-contain p-3"
            />
          </button>
        ))}
      </div>
    </div>
  );
}