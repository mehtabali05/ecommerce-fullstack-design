import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate,useLocation, Link } from 'react-router-dom';
import "../../style/authStyle.css"
import { api } from '../../api';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [formData,setFormData] = useState({
        email:"",
        password:""
    });

    const {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const {data} = await api.post("/api/auth/login",formData);
            // console.log(data);
            if(data && data.success){
                const authData = data.user;
                setAuth(authData);
                toast.success(data.message);
                
                if (authData.role === 'admin') {
                    window.location.href = "http://localhost:5174"; 
                } else {
                    navigate(location.state || "/");
                }
            }else{
                toast.error(error.response?.data?.message || error.message);
            }
        }catch(error){
            toast.error(error.response?.data?.message || error.message);
        }
    }

  return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className='w-80 h-90'>
                <h4 className='title'>LOGIN FORM</h4>
                    <div className="mb-3">      
                        <input autoComplete="email" name='email' type="email" placeholder='Enter Your Email' className="form-control" id="exampleInputEmail" value={formData.email} onChange={(e) => setFormData({...formData,email:e.target.value})} required  />
                    </div>

                    <div className="mb-3">
                        <input autoComplete="password" name='password' type="password" placeholder='Enter Your Password' className="form-control" id="exampleInputPassword" value={formData.password} onChange={(e) => setFormData({...formData,password:e.target.value})} required  />
                    </div>

                    <div className="mb-3">
                        <Link className='cursor-pointer text-blue-500' to={"/forgot-password"} >Forgot Password ?</Link>
                    </div>

                    <button type="submit" className="btn btn-primary mt-2 mb-2 cursor-pointer">LOGIN</button>
                    <p className="text-gray-700  mt-3 mb-11">
                        Don’t have an account?{" "}
                        <Link to={"/register"} className="text-blue-500" > 
                            Sign up
                        </Link>
                    </p> 
            </form>
        </div>
  )
}

export default Login
