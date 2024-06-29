import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';

// layouts
import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth.js";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/home' element={<Home />} />
        {/* add routes with layouts */}
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/auth/*' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
