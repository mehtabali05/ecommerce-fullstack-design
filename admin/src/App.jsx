import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPrivateRoute from './components/AdminPrivateRoute'
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import Products from './pages/admin/Products';
import AdminProfile from './pages/admin/AdminProfile';
import AdminOrders from './pages/admin/AdminOrders';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<AdminPrivateRoute />} > 
          <Route path='profile' element={<AdminProfile />} />
          <Route path='create-category' element={<CreateCategory />} />
          <Route path='create-product' element={<CreateProduct/>} />
          <Route path='update-product/:id' element={<UpdateProduct/>} />
          <Route path='products' element={<Products/>} />
          <Route path='orders' element={<AdminOrders />} />
        </Route>
      </Routes>
    </>
  )
}

export default App