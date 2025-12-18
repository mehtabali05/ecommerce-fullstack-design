import React, { useState, useEffect, useCallback } from 'react';
import AdminMenu from '../../components/AdminMenu.jsx';
import toast from 'react-hot-toast';
import { Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../api.js';
import ImageUpload from '../../components/ImageUpload.jsx';

const { Option } = Select;

const UpdateProduct = () => {
  const params = useParams();
  const navigate = useNavigate();

  // --- States ---
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [id, setId] = useState("");

  // --- Image States ---
  const [mainImage, setMainImage] = useState(null); // Can be a File object or a URL String
  const [galleryImages, setGalleryImages] = useState([]); // Array of File objects or URL Strings

  // 1. Get All Categories
  const getAllCategory = async () => {
    try {
      const { data } = await api.get("/api/categories");
      if (data?.success) setCategories(data?.categories);
    } catch (error) {
      toast.error("Error fetching categories");
    }
  };

  // 2. Get Single Product Data
  const getSingleProduct = async () => {
    try {
      const { data } = await api.get(`/api/products/${params.id}`);
      console.log("Single product", data);
      if (data?.success) {
        const p = data.product;
        setName(p.name);
        setId(p._id);
        setDescription(p.description);
        setPrice(p.price);
        setStock(p.stock);
        setCategory(p.category._id);
        // Set existing Cloudinary URLs to state
        setMainImage(p.mainImage);
        setGalleryImages(p.images || []);
      }
    } catch (error) {
      toast.error("Error fetching product details");
    }
  };

  useEffect(() => {
    getAllCategory();
    getSingleProduct();
  }, []);

  // 3. Handle Gallery Selection (Same as Create)
  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + galleryImages.length > 6) {
      toast.error("Max 6 gallery images allowed");
      return;
    }
    setGalleryImages([...galleryImages, ...files]);
  };

  // 4. Handle Update Product
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("stock", stock);
      productData.append("category", category);

      // 💡 If mainImage is a NEW file object, append it. 
      // If it's a string (URL), the backend logic should handle keeping the old one.
      if (mainImage instanceof File) {
        productData.append("mainImage", mainImage);
      }

      // 💡 Handle Gallery
      galleryImages.forEach((img) => {
        if (img instanceof File) {
          productData.append("images", img);
        } else {
          // If it's an existing URL, you might want to send it back 
          // to tell the backend to keep it.
          productData.append("existingImages", img);
        }
      });

      const { data } = await api.put(`/api/products/${id}`, productData);
      if (data?.success) {
        toast.success("Product Updated Successfully");
        navigate("/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error("Update failed");
    }
  };

  // 5. Handle Delete
  const handleDeleteProduct = async () => {
    try {
      let answer = window.confirm("Are you sure you want to delete this product?");
      if (!answer) return;
      const { data } = await api.delete(`/api/products/${id}`);
      if (data?.success) {
        toast.success("Product Deleted");
        navigate("/products");
      }
    } catch (error) {
      toast.error("Error deleting product");
    }
  };

  return (
    <div className="container-fluid mt-3 p-2">
      <div className="row">
        <div className="col-md-3"><AdminMenu /></div>
        <div className="col-md-8 mt-3">
          <h1>Update Product</h1>
          <div className="m-1 w-80">
            {/* Category Select */}
            <Select 
              placeholder="Select Category" 
              size='large' 
              className='form-select mb-3' 
              onChange={(v) => setCategory(v)} 
              value={category}
            >
              {categories?.map((c) => (<Option key={c._id} value={c._id}>{c.name}</Option>))}
            </Select>

            {/* --- Main Image --- */}
            <h5>Main Image</h5>
            <ImageUpload mainImage={mainImage} setMainImage={setMainImage} />

            {/* --- Gallery Images --- */}
            <h5 className="mt-3">Gallery Images (Max 6)</h5>
            <div className="mb-3">
              <label className="btn btn-outline-secondary">
                {galleryImages.length >= 6 ? "Limit Reached" : "Upload New Gallery Images"}
                <input type="file" accept="image/*" multiple hidden onChange={handleGalleryChange} disabled={galleryImages.length >= 6} />
              </label>
              
              <div className="d-flex flex-wrap mt-2">
                {galleryImages.map((img, index) => (
                  <div key={index} className="position-relative m-2">
                    <img 
                      src={img instanceof File ? URL.createObjectURL(img) : img} 
                      alt="gallery" height="60px" width="60px" className="rounded border" 
                    />
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

            {/* Form Fields */}
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='form-control mb-3' />
            <textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} className='form-control mb-3' />
            <input type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} className='form-control mb-3' />
            <input type="number" placeholder='Stock' value={stock} onChange={(e) => setStock(e.target.value)} className='form-control mb-3' />
            
            <div className="d-flex gap-2">
              <button className='btn btn-primary w-100' onClick={handleUpdateProduct}>Update Product</button>
              <button className='btn btn-danger w-100' onClick={handleDeleteProduct}>Delete Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;