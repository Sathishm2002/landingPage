import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Features from './Components/Features'
import Pricing from './Components/Pricing'
import Contact from './Components/Contact'
import Login from './Components/Login'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Features />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
