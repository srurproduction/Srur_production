import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Services from './Services';
import ServiceDetail from './ServiceDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Services />} />
        <Route path="/service/:name" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App