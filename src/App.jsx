import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Section from './component/Section';
import About from './component/About';
import Index from './Index';
import Wedding from './component/portfolio/Wedding';
import Pre_Wedding from './component/portfolio/Pre_Wedding';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio/wedding" element={<Wedding/>} />
          <Route path="/portfolio/prewedding" element={<Pre_Wedding/>} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
      {/* <About/> */}
          {/* <Section /> */}
    </>
  );
}
export default App;

