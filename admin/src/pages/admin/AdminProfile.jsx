  import React, { useContext, useEffect, useState } from 'react'
  import axios from 'axios';
  import toast from 'react-hot-toast';
  import AdminMenu from '../../components/AdminMenu.jsx';
  import { AuthContext } from '../../contextAPI/AuthContext.jsx';
  import '../../style/authStyle.css';
  const AdminProfile = () => {
    const {auth, setAuth} = useContext(AuthContext);
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");

    useEffect(() => {
      if (auth?.user) {
        const { name, email, phone, address } = auth.user;
        console.log(name, email, phone, address);
        setName(name || "");
        setEmail(email || "");
      }
    }, [auth]);

  const handleSubmit = async (e) =>{
      e.preventDefault();
      try{
          const {data} = await axios.put(`${import.meta.env.VITE_API}/api/v1/auth/admin-profile`,{name,email,password,phone,address});
          if(data?.error){
            toast.error(data.error);
          }else{
            setAuth({...auth,user:data?.updatedUser});
            let ls = localStorage.getItem("auth");
            ls = JSON.parse(ls);
            ls.user = data?.updatedUser;
            localStorage.setItem("auth",JSON.stringify(ls));
            toast.success("Profile Updated Successfully");
          }
      }catch(error){
          // console.log(error);
          toast.error("Something went wrong");
      }
  }

    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 mt-3"> 
              <AdminMenu />
            </div>
            <div className="col-md-9">
            <div className="form-container mt-3 ">
              <form onSubmit={handleSubmit}>
                  <h4 className='title'>ADMIN PROFILE</h4>
            
                      <div className="mb-3">  
                          <input autoComplete="user-name" type="text" placeholder='Enter Your Name' className="form-control" id="exampleInputName" value={name} onChange={(e) => setName(e.target.value)}/>
                      </div>

                      <div className="mb-3">      
                          <input autoComplete="email" type="email" disabled placeholder='Enter Your Email' className="form-control" id="exampleInputEmail" value={email} onChange={(e) => setEmail(e.target.value)}  />
                      </div>

                      <div className="mb-3">
                          <input autoComplete="current-password" type="password" placeholder='Enter Your Password' className="form-control" id="exampleInputPassword" value={password} onChange={(e) => setPassword(e.target.value)}  />
                      </div>
                
                      {/* <div className="mb-3">
                          <input autoComplete="tel" type="text" placeholder='Enter Your Phone' className="form-control" id="exampleInputPhone" value={phone} onChange={(e) => setPhone(e.target.value)}  />
                      </div>
                  
                      <div className="mb-3">
                          <input autoComplete="street-address" type="text" placeholder='Enter Your Address' className="form-control" id="exampleInputAddress" value={address} onChange={(e) => setAddress(e.target.value)}  />
                      </div> */}
                  
                
                      <button type="submit" className="btn btn-primary">UPDATE</button>
              </form>
          </div>
            </div>
          </div>
        </div>
    )
  }

  export default AdminProfile
