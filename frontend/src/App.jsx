import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductGrid from './pages/ProductGrid'
// import ProductListView from './components/ProductListView'

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductGrid />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product-grid' element={<ProductGrid />} />
      </Routes>

    <Footer />  
    </>
  )
}

export default App