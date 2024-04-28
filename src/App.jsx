import React from 'react'
import Home from './pages/home'
import Career from './pages/career'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Mobile from './components/mobile-nav'
import Whowe from './pages/whowe'


import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Model from './components/model'

export default function App() {
  
  return (
    <Router>
      <Navbar />
      <Model />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Careers" element={<Career />} />
          <Route path="/who-we-are" element={<Whowe />} />
          </Routes>
          <Footer />
    </Router>
  )
}

