import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductGrid from './pages/ProductGrid'

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product-grid' element={<ProductGrid />} />
      </Routes>

    <Footer />  
    </>
  )
}

export default App