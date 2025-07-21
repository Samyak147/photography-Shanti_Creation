import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center relative z-1">
      
       {/* <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center 
                fixed top-0 left-0 w-full z-50"> */}
        {/* Logo */}
       <Link to="/" className="flex items-center"><div className="text-xl font-bold italic text-gray-300">Shanti Photography</div></Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium items-center">
          {/* Portfolio Dropdown */}
          <li className="relative group">
            <span className="hover:text-gray-400 cursor-pointer">Portfolio</span>
            <ul className="absolute top-8 -right-15 text-gray-300 rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 min-w-[140px]">
              <li><Link to="/portfolio/wedding" className="block px-4 py-2 hover:bg-gray-800">Wedding</Link></li>
              <li><Link to="/portfolio/prewedding" className="block px-4 py-2 hover:bg-gray-800">Pre Wedding</Link></li>
              <li><Link to="/portfolio/product" className="block px-4 py-2 hover:bg-gray-800">Product</Link></li>
            </ul>
          </li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black px-6 py-4 space-y-2 overflow-hidden"
          >
            {/* Portfolio submenu for mobile */}
            <div>
              <span className="block text-gray-300 font-medium">Portfolio</span>
              <div className="pl-4 mt-1 space-y-1 text-sm">
                <Link to="/portfolio/wedding" onClick={() => setOpen(false)} className="block text-gray-400 hover:text-white">Wedding</Link>
                <Link to="/portfolio/prewedding" onClick={() => setOpen(false)} className="block text-gray-400 hover:text-white">Pre Wedding</Link>
                <Link to="/product" onClick={() => setOpen(false)} className="block text-gray-400 hover:text-white">Product</Link>
              </div>
            </div>
            <Link to="/about" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-gray-500">About</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-gray-500">Services</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-gray-500">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
