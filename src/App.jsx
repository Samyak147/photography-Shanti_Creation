import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import TipScreen from './component/TipScreen'; // Import tip screen
import About from './component/About';
import Index from './Index';
import Wedding from './component/portfolio/Wedding';
import Pre_Wedding from './component/portfolio/Pre_Wedding';
import Product from './component/portfolio/Product';
import Contact from './component/Contact';
import Services from './component/Services';
import Book from './component/Book';


function App() {
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTip(false);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showTip) return <TipScreen onFinish={() => setShowTip(false)} />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio/wedding" element={<Wedding />} />
        <Route path="/portfolio/prewedding" element={<Pre_Wedding />} />
        <Route path="/portfolio/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/book" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
