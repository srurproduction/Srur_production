import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ServiceDetail from './ServiceDetail';

const App = () => {
  const [dark, setDark] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage dark={dark} setDark={setDark} />} />
        <Route path="/services/:name" element={<ServiceDetail dark={dark} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;