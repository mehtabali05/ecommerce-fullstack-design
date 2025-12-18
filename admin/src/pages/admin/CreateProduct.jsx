import React, { useState, useEffect } from 'react';
import AdminMenu from '../../components/AdminMenu.jsx';
import toast from 'react-hot-toast';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api.js';
import ImageUpload from '../../components/ImageUpload.jsx';

const { Option } = Select;

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  
  // 💡 Image States
  const [mainImage, setMainImage] = useState(null); // Required
  const [galleryImages, setGalleryImages] = useState([]); // Array for up to 6 images

  const navigate = useNavigate();

  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const { data } = await api.get("/api/categories");
        if (data?.success) setCategories(data?.categories);
      } catch (error) {
        toast.error("Error fetching categories");
      }
    };
    getAllCategory();
  }, []);

  // 💡 Handle Gallery Selection
  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + galleryImages.length > 6) {
      toast.error("You can only upload a maximum of 6 gallery images");
      return;
    }
    setGalleryImages([...galleryImages, ...files]);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      if (!mainImage) return toast.error("Main image is required");

      const productData = new FormData();
      productData.append("name", name);
      productData.append("price", price);
      productData.append("description", description);
      productData.append("category", category);
      productData.append("stock", stock);
      
      // 💡 Append Main Image
      productData.append("mainImage", mainImage);

      // 💡 Append Gallery Images (loop through the array)
      galleryImages.forEach((image) => {
        productData.append("images", image);
      });

      const { data } = await api.post("/api/products", productData);
      if (data?.success) {
        toast.success("Product Created Successfully");
        navigate("/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container-fluid mt-3 p-2">
      <div className="row">
        <div className="col-md-3"><AdminMenu /></div>
        <div className="col-md-8 mt-3">
          <h1>Create Product</h1>
          <div className="m-1 w-80">
            {/* Category Select */}
            <Select placeholder="Select Category" size='large' className='form-select mb-3' onChange={(v) => setCategory(v)}>
              {categories?.map((c) => (<Option key={c._id} value={c._id}>{c.name}</Option>))}
            </Select>

            {/* --- Main Image (Required) --- */}
            <h5>Main Image (Required)</h5>
            <ImageUpload mainImage={mainImage} setMainImage={setMainImage} />

            {/* --- Gallery Images (Max 6) --- */}
            <h5 className="mt-3">Gallery Images (Optional - Max 6)</h5>
            <div className="mb-3">
              <label className="btn btn-outline-secondary">
                {galleryImages.length >= 6 ? "Limit Reached" : "Upload Gallery Images"}
                <input type="file" accept="image/*" multiple hidden onChange={handleGalleryChange} disabled={galleryImages.length >= 6} />
              </label>
              
              <div className="d-flex flex-wrap mt-2">
                {galleryImages.map((img, index) => (
                  <div key={index} className="position-relative m-2">
                    <img src={URL.createObjectURL(img)} alt="gallery" height="60px" width="60px" className="rounded border" />
                    <button 
                      type="button"
                      className="btn btn-danger btn-sm position-absolute top-0 end-0 p-0" 
                      style={{borderRadius: '50%', width: '20px', height: '20px', fontSize: '10px'}}
                      onClick={() => setGalleryImages(galleryImages.filter((_, i) => i !== index))}
                    >X</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Inputs */}
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='form-control mb-3' />
            <textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} className='form-control mb-3' />
            <input type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} className='form-control mb-3' />
            <input type="number" placeholder='Stock' value={stock} onChange={(e) => setStock(e.target.value)} className='form-control mb-3' />
            
            <button className='btn btn-primary w-100' onClick={handleCreateProduct}>Create Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;