// import React from 'react'
// import Footer from '../Footer'
// import Nav from '../Nav'

// export default function Wedding() {
//   const images = [
//     '/img/image1.JPG',
//     '/img/image1.JPG',
//     '/img/image2.JPG',
//     '/img/image3.JPG',
//     '/img/image4.JPG',
//     '/img/image5.JPG',

//   ]

//   return (
//     <>
//       <Nav />

//       <section className="bg-black text-white py-6 px-4 md:px-12 lg:px-20">
//         <h2 className="text-4xl md:text-5xl font-semibold text-center mb-10 underline">
//           Wedding
//         </h2>

//         {/* Centered Container */}
//         <div className="max-w-6xl mx-auto flex justify-center ">
//           <div className="grid  grid-cols-1 md:grid-cols-12  gap-15">

//             {images.map((src, index) => {
//               const isLarge = index % 3 === 0

//               // Large = 6 columns, Small = 4 columns
//               const colSpanClass = isLarge
//                 ? 'md:col-span-6'
//                 : 'md:col-span-5'

//               return ( 
//                 <div
//                   key={index}
//                   className={`${colSpanClass} w-full transition-all duration-500 hover:scale-105  flex  items-center `}



//                 >
//                   <img
//                     src={src}
//                     alt={`Wedding ${index + 1}`}
//                     className="rounded-xl shadow-lg w-full h-auto object-cover"
//                   />
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   )
// }



import React from 'react'
import { motion } from 'framer-motion';
import Footer from '../Footer'
import Nav from '../Nav'

export default function Wedding() {
  const images = [
    '/img/image5.JPG',
    '/img/image6.JPG',
    '/img/image8.JPG',
    '/img/image9.JPG',
    '/img/image7.JPG',
    '/img/image13.JPG',
    '/img/image10.JPG',
    '/img/image11.JPG',
  ]

  return (
    <>
      <Nav />

      <section className="bg-black text-white py-6 px-4 md:px-12 lg:px-20">
        <motion.h2 initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }} className="text-4xl md:text-5xl font-semibold text-center mb-20 underline">
          Wedding
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
                        className="flex justify-center w-full transition-all duration-500 grayscale hover:grayscale-0 hover:scale-105"
                      >
                        <img
                          src={images[index]}
                          alt={`Wedding ${index + 1}`}
                          className={`${widthClass} aspect-[4/3] rounded-xl shadow-lg object-cover`}
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

