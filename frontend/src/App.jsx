import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Footer from './components/layout/Footer'
import ProductGrid from './pages/ProductGrid'
import { Toaster } from 'react-hot-toast';
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'
import Header from './components/layout/Header'
import About from './pages/About'

const App = () => {
  return (
    <>
    <Header />
    <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product-grid' element={<ProductGrid />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about-us' element={<About />} />
      </Routes>

    <Footer />  
    </>
  )
}

export default App