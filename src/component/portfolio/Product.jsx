import React from 'react'
import { motion } from 'framer-motion';
import Nav from '../Nav';
import Footer from '../Footer';

export default function Product() {
  const images = [
    'https://res.cloudinary.com/dqtxo7gkq/image/upload/f_auto,q_auto,w_800/v1763393306/pro_image3_pqaifq.png',
'https://res.cloudinary.com/dqtxo7gkq/image/upload/f_auto,q_auto,w_800/v1763393298/pro_image2_ywjvt7.png',
'https://res.cloudinary.com/dqtxo7gkq/image/upload/f_auto,q_auto,w_800/v1763393569/pro_image4_uld5nt.png',
'https://res.cloudinary.com/dqtxo7gkq/image/upload/f_auto,q_auto,w_800/v1763393583/pro_image5_nnu0ur.png',
'https://res.cloudinary.com/dqtxo7gkq/image/upload/f_auto,q_auto,w_800/v1763393302/pro_image6_ctdyjy.png',
'https://res.cloudinary.com/dqtxo7gkq/image/upload/f_auto,q_auto,w_800/v1763393278/pro_image_h0sr7a.png',

    
    
  ]

  return (
    <>
      <Nav />

      <section className="bg-black text-white py-6 px-4 md:px-12 lg:px-20">
        <motion.h2 initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }} className="text-4xl md:text-5xl font-semibold text-center mb-10 md:mb-20 underline">
          Products
        </motion.h2>

        <motion.div initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }} className="max-w-6xl mx-auto flex flex-col gap-10 ">
          {
            // Create pairs: [0,1], [2,3], [4,5]...
            Array.from({ length: Math.ceil(images.length / 2) }).map((_, rowIndex) => {
              const firstIndex = rowIndex * 2
              const secondIndex = firstIndex + 1
              const isEvenRow = rowIndex % 2 === 0

              return (
                <div
                  key={rowIndex}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-18 md:pb-20 items-center"
                >
                  {[firstIndex, secondIndex].map((index, colIndex) => {
                    if (index >= images.length) return null

                    // Alternate large-small per row
                    const isLarge = (isEvenRow && colIndex === 0) || (!isEvenRow && colIndex === 1)
                    const widthClass = isLarge ? 'md:w-[95%]' : 'md:w-[84%]'

                    return (
                      <div
                        key={index}
                        className="flex justify-center w-full transition-all duration-500 md:grayscale md:hover:grayscale-0 hover:scale-105"
                      >
                        <img
                          src={images[index]}
                          alt={`Product ${index + 1}`}
                          className={`${widthClass} aspect-[4/3] rounded-xl shadow-lg object-cover`}
                          loading="lazy"
                        />
                      </div>
                    )
                  })}
                </div>
              )
            })
          }
        </motion.div>
      </section>

      <Footer />
    </>
  )
}
