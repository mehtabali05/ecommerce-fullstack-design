import React from 'react';
import { uploadMain } from '../assets/asset';

// 💡 Ensure the prop name matches what the parent sends
const ImageUpload = ({ mainImage, setMainImage }) => {
  return (
    <div className="mb-3">
      <label className="btn border border-secondary p-2" style={{ cursor: 'pointer' }}>
        {mainImage ? (
          <div className="text-center">
            {/* 💡 Only create URL if mainImage is an actual File object */}
            <img 
              src={mainImage instanceof File ? URL.createObjectURL(mainImage) : mainImage} 
              alt="product_photo" 
              height={"100px"} 
              className='img img-responsive' 
            />
          </div>
        ) : (
          <div className="text-center">
            <img src={uploadMain} alt="Upload placeholder" height={"50px"} />
            <p className="m-0" style={{ fontSize: '12px' }}>Upload Image</p>
          </div>
        )}
        
        <input 
          type="file" 
          name="photo" 
          accept='image/*' 
          onChange={(e) => setMainImage(e.target.files[0])} 
          hidden 
        />
      </label>
    </div>
  );
}

export default ImageUpload;