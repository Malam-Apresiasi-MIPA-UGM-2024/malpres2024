"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Acaratamu = () => {
  // Animasi fade-in dengan scaling sedikit
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  // Refs untuk mengamati setiap elemen
  const acaraUtamaRef = useRef(null);
  const inViewAcaraUtama = useInView(acaraUtamaRef, { triggerOnce: false, threshold: 0.5 });

  return (
    <div className="relative bg-[url('/gikgum.jpg')] bg-cover bg-center p-8 flex flex-col items-center justify-center font-poppins">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#E9557F] opacity-50"></div>

      {/* Content */}
      <motion.div
        ref={acaraUtamaRef}  // Ref untuk mengamati elemen
        className="relative z-10 flex flex-col items-center justify-center w-full"
        initial="hidden"
        animate={inViewAcaraUtama ? 'visible' : 'hidden'}
        variants={fadeInUp}
      >
        <motion.div
          className="relative z-10 shadow-md bg-white rounded-lg p-3 mb-8 w-48 text-center font-bold text-[#E9557F] text-xl"
          variants={fadeInUp}
        >
          Acara Utama
        </motion.div>

        <div className="relative z-10 flex flex-col md:flex-row justify-around items-center w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-2 mb-[2rem]">
          {/* Box 1 */}
          <motion.div className="relative text-center rounded-lg" variants={fadeInUp}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/tba-acara.svg"
                alt="Guest 1"
                className="lg:w-[18rem] w-[15rem] lg:h-[18rem] h-[15rem] object-cover border-white border-2 rounded-lg"
              />
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div className="relative text-center rounded-lg" variants={fadeInUp}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/tba-acara.svg"
                alt="Guest 2"
                className="lg:w-[18rem] w-[15rem] lg:h-[18rem] h-[15rem] object-cover border-white border-2 rounded-lg"
              />
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div className="relative text-center rounded-lg" variants={fadeInUp}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/tba-acara.svg"
                alt="Guest 3"
                className="lg:w-[18rem] w-[15rem] lg:h-[18rem] h-[15rem] object-cover border-white border-2 rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Lokasi */}
        <div className="relative z-10 flex justify-center -mt-[1rem]">
          <p className="bg-[#E9557F] text-[#F8E6D2] md:p-[0.5rem] p-[0.25rem] border-2 border-white mr-[0.5rem] rounded-l-lg font-semibold text-xxs md:text-base lg:text-lg xl:text-xl">
            Lokasi
          </p>
          <p className="bg-[#FFFFFF] text-[#AD285C] md:p-[0.5rem] p-[0.25rem] border-2 border-[#AD285C] rounded-r-lg font-semibold text-xxs md:text-base lg:text-lg xl:text-xl">
            Gelanggang Inovasi dan Kreativitas UGM
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Acaratamu;
