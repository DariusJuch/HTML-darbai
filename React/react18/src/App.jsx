import { useState } from 'react'
import { Routes, Route } from "react-router"
import HomePage from './pages/HomePage'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
