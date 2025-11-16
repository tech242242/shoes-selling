import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProductDetails from './pages/ProductDetails'
import ThemeManager from './components/ThemeManager'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div className="min-h-screen text-white bg-bt-black relative overflow-x-hidden">
      <ThemeManager />
      <Navbar />
      <main className="pt-20 pb-10 container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  )
}
