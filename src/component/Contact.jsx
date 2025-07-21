import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Nav from './Nav';
import Footer from './Footer';

// Default message constant
const DEFAULT_MESSAGE = "I'm interested in your photography services. I'd love to know more about your packages, availability, and pricing. Please let me know how I can book a session. Thanks!";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eventdate: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, eventdate, message } = formData;
    const phone = '919999999999'; // Replace with your actual WhatsApp number

    // If the message is empty, use the default
    const finalMessage = message.trim() === '' ? DEFAULT_MESSAGE : message;

    const text = `New Contact Form Submission:%0A
Hello I am: ${firstName} ${lastName}%0A
Message: ${finalMessage}
Email: ${email}%0A
Event Date: ${eventdate}%0A`;

    // Open WhatsApp
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
    <Nav/>
    <section className="bg-black text-white py-15 px-6 md:px-16 lg:px-32">
      <motion.h2 initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }} className=' text-4xl md:text-5xl font-semibold text-center mb-10 md:mb-15 underline'>Get In Touch!</motion.h2>
      <motion.div initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT: Contact Info */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            For inquiries about sessions and pricing, fill out the form and send it to us. we will get back to you.
          </p>

          <div className="text-sm space-y-2 text-gray-300">
            <p>vijay nagar ,Indore ,<br />(MP), 452011</p>
            <p>shantiphotography@gmail.com</p>
            <p>Tel: 91 74891-34309</p>
          </div>

          <div className="flex space-x-5 pt-2 text-xl">
            <a href="#" className="hover:text-gray-400"><FaWhatsapp /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            {/* <a href="#" className="hover:text-gray-400"><FaTwitter /></a> */}
          </div>
        </div>

        {/* RIGHT: Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">First name *</label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last name *</label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border border-white text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <label htmlFor="eventdate" className="block text-sm font-medium mb-1">Event date</label>
              <input
                id="eventdate"
                type="date"
                value={formData.eventdate}
                onChange={handleChange}
                className="w-full bg-black border border-white text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black border border-white text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder={DEFAULT_MESSAGE}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 font-semibold hover:bg-gray-300 transition"
            >
              Send On Whatsapp
            </button>
          </div>
        </form>
      </motion.div>
    </section>
    <Footer/>
    </>
  );
}
