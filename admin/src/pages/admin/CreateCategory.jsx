import React from 'react'
import AdminMenu from '../../components/AdminMenu.jsx'
import { useState,useEffect } from 'react'
import toast from 'react-hot-toast'
import CategoryForm from '../../components/CategoryForm.jsx'
import {Modal} from 'antd'
import { api } from '../../api.js'

const CreateCategory = () => {
  const [categories,setCategories] = useState([]);
  const [name,setName] = useState("");
  const [visible,setVisible] = useState(false); 
  const [selected,setSelected] = useState(null);
  const [updatedName,setUpdatedName] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const {data} = await api.post("/api/categories",{name});
      if(data?.success){
        toast.success(`${name} is Created Successfully`);
        setName("");
        getAllCategory();
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong in Create category Form");
    }
  }
  
  const getAllCategory = async () =>{
    try {
      const {data} = await api.get("/api/categories");
      // console.log("All categories",data);
      if(data.success){
        setCategories(data.categories);
      }
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong in getting Category");
    }
  }

  useEffect(() => {
    getAllCategory();
  },[]);

  // const handleUpdate = async (e) =>{
  //   e.preventDefault();
  //   try {
  //     const {data} = await api.put(`/api/categories/${selected._id}`,{name:updatedName});
  //     if(data?.success){
  //       toast.success(`${name} Updated Successfully`);
  //       setSelected(null);
  //       setUpdatedName("");
  //       setVisible(false);
  //       getAllCategory();
  //     }else{
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong in updating category");
  //   }
  // }


  const handleDelete = async (id) =>{
    try {
      const {data} = await api.delete(`/api/categories/${id}`);
      // console.log("backend category",id,data);
      if(data?.success){
        // toast.success(`${data.deletedCategory.name} Deleted Successfully`);
        toast.success(`category Deleted Successfully`);
        getAllCategory();
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong in deleting category");
    }
  }

  return (
      <div className="container-fluid mt-3 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-8 mt-3">
            <div className="card p-2 w-80 ">
              <h1>Manage Category</h1>
              <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
              <div >
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories?.map((c) => (   
                      <tr key={c._id}>
                        <td>{c.name}</td>
                          {/* <button className='btn btn-primary' onClick={() => {setVisible(true); setUpdatedName(c.name); setSelected(c)}} >Edit</button> */}
                          <td><button className='btn btn-danger ms-3' onClick={()=> handleDelete(c._id)} >Delete</button>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>

              </div>
            </div>
            {/* <Modal onCancel={() => setVisible(false)} footer={null} open={visible} >
              <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />
            </Modal> */}
          </div>

        </div>
      </div>
  )
}

export default CreateCategory
