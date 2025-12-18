import React from 'react'
import AdminMenu from '../../components/AdminMenu.jsx'
import { useAuth } from '../../contextAPI/AuthContext.jsx'
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
      <div className="container-fluid m-3 p-2">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div> 
          <div className="col-md-9">
            <div className="card w-75 p-2">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdminDashboard
