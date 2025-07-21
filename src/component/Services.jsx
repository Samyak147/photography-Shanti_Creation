import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from './Nav';
import Footer from './Footer';

export default function Services() {
  const services = [
    {
      title: 'Wedding Photography',
      image: '/img/w_image1.webp', 
      description:
        'Capturing timeless moments of your big day with elegance, creativity, and emotion.',
    },
    {
      title: 'Pre-Wedding Photography',
      image: '/img/p_image0.webp',
      description:
        'Create magical memories before the wedding day with artistic and themed pre-wedding shoots.',
    },
    {
      title: 'Product Shoot',
      image: '/img/p_image12.webp',
      description:
        'High-quality, detail-oriented product photography to elevate your brand presence.',
    },
  ];

  return (
    <>
    <Nav/>
    <div className="bg-black text-white py-12 px-4 md:px-20">
    <motion.h2 initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }} className="text-4xl md:text-5xl font-semibold text-center mb-10 md:mb-20 underline">
         our services
        </motion.h2>

      {services.map((service, index) => (
        <Link to="/services/book" key={index} className="block group">
          <motion.div initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }} className="flex flex-col md:flex-row items-stretch mb-16 h-[500px] ">
            {/* Image on Left */}
            <div className="w-full md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-l-lg shadow-lg"
              />
            </div>

            {/* Text on Right*/}
            <div className="w-full md:w-1/2 bg-white text-black p-6 md:pl-12 flex flex-col justify-center md:rounded-r-lg ">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-widest">
                {service.title}
              </h2>
              <p className="text-base md:text-lg ">
                {service.description}
              </p>
              <span className="mt-4 text-blue-600 underline ">Book Now →</span>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
    <Footer/>
    </>
  );
}

