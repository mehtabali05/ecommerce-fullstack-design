import React, { useState,useEffect } from 'react'
import AdminMenu from '../../components/AdminMenu.jsx'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { api } from '../../api.js';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
    // const [products,setProducts] = useState([]);
 

    // const getAllProducts = async () =>{
    //     try {
    //         const {data} = await api.get("/api/products");
    //         console.log(data);
    //         if(data?.success){
    //             // toast.success(data.message);
    //             setProducts(data.products);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         toast.error("Something went wrong");
    //     }
    // }

    // useEffect(()=>{
    //     getAllProducts();
    // },[]);

    const [products,setProducts] = useState([]);
    const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(34);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [sort, setSort] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const fetchProducts = async () => {
    try {
      const query = new URLSearchParams({
        page,
        limit,
        sort,
        ...(selectedCategory && { category: selectedCategory }),
        ...(search && { search }),
      }).toString();
  
      const { data } = await api.get(`/api/products?${query}`);
  
      if (data.success) {
        setProducts(data.products);
        setTotalPages(data.totalPages);
        setTotalItems(data.totalCount);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    fetchProducts();
  }, [page, limit,sort,selectedCategory,search]); 
  return (
    <div className="container-fluid admin-products">      
      <div className="row mt-3 p-2">
        <div className="col-md-3"> 
            <AdminMenu /> 
        </div>
        <div className="col-md-8 mt-3">
            <h1 className="text-center">All Products List</h1>
            <div className="d-flex flex-wrap">
                {products?.map((p) =>(
                    <Link to={`/update-product/${p._id}`} key={p._id} className='product-link'>
                        <div className="card m-3" style={{width: '18rem',height:'26.5rem'}}>
                            <img src={p.mainImage} className="card-img-top card-img-fixed" style={{height: '18rem'}} alt={p.name} />
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.description.substring(0,30)}...</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </div>  
  )
}

export default Products
