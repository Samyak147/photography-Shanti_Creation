import React from 'react'
import { motion } from 'framer-motion';
import Footer from '../Footer'
import Nav from '../Nav'

export default function Pre_Wedding() {
  const images = [
    '/img/p_image0.webp',
    '/img/p_image10.webp',
    '/img/p_image2.webp',
    '/img/p_image3.webp',
    '/img/p_image1.webp',
    '/img/p_image6.webp',
    '/img/p_image4.webp',
    '/img/p_image7.webp',
    '/img/p_image8.webp',
    '/img/p_image5.webp',
    '/img/p_image9.webp',
    '/img/p_image11.webp',
  ]

  return (
    <>
      <Nav />

      <section className="bg-black text-white py-6 px-4 md:px-12 lg:px-20">
        <motion.h2 initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }} className="text-4xl md:text-5xl font-semibold text-center mb-10 md:mb-20 underline">
          Pre Wedding
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
                          alt={`Wedding ${index + 1}`}
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

