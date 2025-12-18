import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import "../../style/authStyle.css"
import { api } from '../../api';
const Register = () => {
  
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // HandleChange function
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const {data} = await api.post("/api/auth/register",formData);
            console.log("Response from register api ",data);
            if(data.success){
                toast.success(data.message);
                navigate("/login");
            }else{
                toast.error(data.message);
                // navigate("/register");
            }
        }catch(error){
            toast.error(error.response?.data?.message || error.message);
        }
    }

  return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className='w-80 h-90'>
                <h4 className='title'>REGISTER FORM</h4>
           
                    <div className="mb-3">  
                        <input autoComplete="name" name='name' type="text" placeholder='Enter Your Name' className="form-control" id="exampleInputName" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">      
                        <input autoComplete="email" name='email' type="email" placeholder='Enter Your Email' className="form-control" id="exampleInputEmail" value={formData.email} onChange={handleChange} required  />
                    </div>

                    <div className="mb-3">
                        <input autoComplete="password" name='password' type="password" placeholder='Enter Your Password' className="form-control" id="exampleInputPassword" value={formData.password} onChange={handleChange} required  />
                    </div>
               
                    <button type="submit" className="btn btn-primary mt-2 cursor-pointer">REGISTER</button>
                    <p className="text-gray-700  mt-3 mb-3 mb-11">
                        Already have an account?{" "}
                        <Link to={"/login"} className="text-blue-500" > 
                            Log in
                        </Link>
                    </p> 
            </form>
        </div>
  )
}

export default Register
