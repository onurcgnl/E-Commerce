import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from './about-us/about-us';
import Contact from './contact/contact'
import Detail from '../pages/Detail';
export const Routers = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="detail/:id" element={<Detail />} />
      </Routes>
  )
}
