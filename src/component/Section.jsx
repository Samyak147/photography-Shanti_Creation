// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';


// export default function Section() {
//   return (
//     <section className="bg-black min-h-screen flex items-center justify-center overflow-hidden px-4">
//       <div className="w-full max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative">

//         {/* Left - Text Box */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-white w-full md:w-[450px] h-auto md:h-[500px] mx-auto z-10 
//           flex flex-col justify-center items-center text-center px-6 py-6 rounded-md shadow-md"
//         >
//           <h2 className="text-sm text-gray-600 tracking-wide italic mb-2">
//             Photography <br /> Studio
//           </h2>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-4 leading-snug">
//             SHANTI PHOTOGRAPHY <br /> & CREATION
//           </h1>

//           <Link to="/services" className="text-sm underline font-semibold italic text-gray-600 hover:text-black transition">Book Now</Link>
//         </motion.div>

//         {/* Right - Image Box */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="w-full h-auto md:h-[550px] md:w-[850px] md:absolute md:top-1/2 md:right-10 md:-translate-y-1/2"
//         >
//           <img
//             src="First_img1.webp"
//             alt="Studio Model"
//             className="w-full h-full object-cover grayscale rounded-md"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Section() {
  return (
    <section className="bg-black py-20 md:py-10 md:min-h-screen flex items-center px-4">
      <div className="w-full max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative items-center">

        {/* Left - Text Box */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='bg-white w-full md:w-[450px] h-auto md:h-[500px] mx-auto z-10 
           flex flex-col justify-center items-center text-center px-6 py-6 rounded-md shadow-md'
        >
          <h2 className="text-sm text-gray-600 tracking-wide italic mb-2">
            Photography <br /> Studio
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-4 leading-snug">
            SHANTI PHOTOGRAPHY <br /> & CREATION
          </h1>

          <Link to="/services" className="text-sm underline font-semibold italic text-gray-600 hover:text-black transition">Book Now</Link>
        </motion.div>

        {/* Right - Image Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-auto md:h-[550px] md:w-[850px] md:absolute md:top-1/2 md:right-10 md:-translate-y-1/2"

        >
          <img
            src="First_img1.webp"
            alt="Studio Model"
            className="w-full h-full object-cover grayscale rounded-md"
          />
        </motion.div>

      </div>
    </section>
  );
}
