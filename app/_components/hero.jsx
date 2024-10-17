"use client"
import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.8 }}
      className="md:mt-[5.5rem] mt-20 relative font-poppins"
    >
      <div className="w-[97vw] h-[550px] md:h-[640px] lg:bg-[url('/banner_malpres.webp')] md:bg-[url('/banner_malpres_mdsm.webp')] bg-[url('/banner_malpres_sm.webp')] mx-auto mt-8 bg-cover bg-center border-2 border-[#E9557F] rounded-lg">
        
        {/* Logo with Bounce Animation */}
        <motion.div 
          className="absolute inset-0 flex justify-center items-center"
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
        >
          <img src="/logo-hero-malpres.svg" alt="Malpres Logo" className="w-468 h-468" />
        </motion.div>

        {/* Button Container */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1.2, delay: 0.5 }} // Animasi setelah logo
          className="absolute inset-x-0 bottom-8 w-[280px] md:w-[500px] md:h-16 bg-white mx-auto md:flex md:justify-between justify-center text-center items-center px-2 py-2 md:p-4 rounded-lg z-10"
        >
          <div className="md:text-lg text-base font-bold text-[#E9557F] md:ml-[0.5rem] mb-3 md:mb-0">Dapatkan Tiket Sekarang!</div>
          <a href="/comingsoon">
            <motion.button
              whileHover={{ scale: 1.1 }} // Animasi scale saat hover
              className=" bg-[#E9557F] font-semibold text-white mb-2 md:mb-0 text-sm md:text-sm lg:text-lg py-2 w-48 md:w-52 rounded-lg hover:bg-pink-400"
            >
              Dapatkan Sekarang
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
