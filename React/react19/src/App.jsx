import { useState } from 'react'
import { Routes, Route } from "react-router";
import HomePage from './Pages/HomePage';
import DonorForm from './components/DonorForm';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/registration" element={<DonorForm/>}/>
      </Routes>
    </>
  )
}

export default App
