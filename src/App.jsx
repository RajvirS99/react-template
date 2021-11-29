import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About } from './pages';
import './App.css';

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
