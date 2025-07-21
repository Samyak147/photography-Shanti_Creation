// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Section() {
//   return (
//     <section className="bg-black min-h-screen flex items-center justify-center  overflow-hidden px-4">
//       <div className="w-full max-w-8xl mx-auto grid md:grid-cols-2 pt-0 relative gap-6">

//         {/* Left - Text Box with Animation */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-white w-full md:w-[450px] h-auto md:h-[500px] mx-auto self-center z-10 
//           flex flex-col justify-center items-center text-center px-6 py-6 rounded-md shadow-md"
//         >
//           <h2 className="text-sm text-gray-600 tracking-wide italic mb-2">
//             Photography <br /> Studio
//           </h2>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-4 leading-snug">
//             SHANTI PHOTOGRAPHY <br /> & CREATION
//           </h1>
//           <a
//             href="#"
//             className="text-sm underline font-semibold text-black hover:text-gray-600 transition"
//           >
//             Book Now
//           </a>
//         </motion.div>

//         {/* Right - Image Box with Responsive Placement */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="w-full h-auto md:h-[550px] md:w-[850px] z-0 
//           relative md:absolute md:top-1/2 md:right-10 md:transform md:-translate-y-1/2"
//         >
//           <img
//             src="First_img1.png"
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

export default function Section() {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="w-full max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative">

        {/* Left - Text Box */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white w-full md:w-[450px] h-auto md:h-[500px] mx-auto z-10 
          flex flex-col justify-center items-center text-center px-6 py-6 rounded-md shadow-md"
        >
          <h2 className="text-sm text-gray-600 tracking-wide italic mb-2">
            Photography <br /> Studio
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-4 leading-snug">
            SHANTI PHOTOGRAPHY <br /> & CREATION
          </h1>
          <a
            href="#"
            className="text-sm underline font-semibold text-black hover:text-gray-600 transition"
          >
            Book Now
          </a>
        </motion.div>

        {/* Right - Image Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-auto md:h-[550px] md:w-[850px] md:absolute md:top-1/2 md:right-10 md:-translate-y-1/2"
        >
          <img
            src="First_img1.png"
            alt="Studio Model"
            className="w-full h-full object-cover grayscale rounded-md"
          />
        </motion.div>

      </div>
    </section>
  );
}

