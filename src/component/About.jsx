import React from 'react';
import Nav from './Nav';
import { motion } from 'framer-motion';
import Footer from './Footer';

export default function About() {
    return (
        <>
            <Nav />
            <section
                className="bg-black text-gray-100 min-h-screen px-6 md:px-20 py-3"
            >
                <motion.div initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }} className="text-[50px] underline text-center mb-12">About</motion.div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-0 items-stretch">
                    {/* Left - Text Content */}
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="md:col-span-8 bg-white text-black p-6 flex flex-col justify-center"
                    >
                        <h2 className="text-4xl font-light text-center  mb-10 font-[Garamond] tracking-wide">
                            Meet The Photographer
                        </h2>
                        <p className="text-gray-950 text-lg leading-relaxed mb-5">
                            Welcome to <span className="font-semibold text-black">Shanti Photography & Creation</span>,
                            where every frame is a story. With a passion for creativity and a commitment to quality,
                            we capture the moments that matter most — timeless, elegant, and uniquely yours.
                        </p>
                        <p className="text-gray-950 mb-6">
                            Whether it's your wedding day, a portrait session, or a commercial shoot, we bring
                            a blend of artistry and professionalism to every project. Our studio is equipped with
                            state-of-the-art technology, and our team is dedicated to ensuring every shot exceeds expectations.
                        </p>
                        <ul className="space-y-3 text-gray-950 italic">
                            <li className="flex items-center">
                                <span className="text-black mr-3">•</span> 7+ Years of Experience
                            </li>
                            <li className="flex items-center">
                                <span className="text-black mr-3">•</span> Weddings, Fashion, Products & Events
                            </li>
                            <li className="flex items-center">
                                <span className="text-black mr-3">•</span> High-Resolution Digital & Print Packages
                            </li>
                            <li className="flex items-center">
                                <span className="text-black mr-3">•</span> 100% Client Satisfaction
                            </li>
                        </ul>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="md:col-span-4 w-full h-full"
                    >
                        <div className="h-full">
                            <img
                                src="About_img.png"
                                alt="Photographer"
                                loading='lazy'
                                className="shadow-lg w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer/>
        </>
    );
}
