import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
