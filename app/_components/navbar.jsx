"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // useEffect to detect screen size and force isOpen to false if screen width is more than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);// Ensure menu is closed on larger screens
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    // Run the function on resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.nav
      className="border-2 h-14 border-[#E9557F] py-3 px-[1rem] flex justify-between mt-4 bg-[#FCD9C6] rounded-lg fixed top-0 z-20 font-poppins"
      initial={{ width: 0 }} // Width kecil saat awal render
      animate={{ width: 'calc(100% - 16px)', left: '8px', right: '8px' }} // Margin 4px di kiri dan kanan
      transition={{ duration: 1 }} // Durasi animasi 1 detik
    >

      {/* Logo */}
      <motion.div
        initial={{ opacity: 1 }}  // Mulai dengan visible (opacity 1)
        animate={{ opacity: isOpen ? 0 : 1 }}  // Fade out saat isOpen true
        transition={{ duration: 0.5 }}  // Durasi animasi fade out
        className={`flex items-center mr-8`}
      >
        <Image src="/logo_malpres.svg" alt="Malpres Logo" width={120} height={120} />
      </motion.div>

      {/* Burger Button */}
      <motion.div className="md:hidden flex absolute right-4 top-4"> {/* Set burger selalu di kanan */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#E9557F] focus:outline-none"
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ rotate: 0 }}  // Awalnya tidak berotasi
            animate={{ rotate: isOpen ? 90 : 0 }}  // Rotasi 90 derajat saat toggle
            transition={{ duration: 0.5 }}  // Durasi animasi rotasi
          >
            {/* Ketika isOpen true, render X icon, jika false, render burger icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h18M4 12h18m-18 6h18"}
            />
          </motion.svg>
        </button>
      </motion.div>

      {/* Links */}
      <motion.div
        initial={{ opacity: isMobile? 0 : 1, y: isMobile ? -20 : 0 }}  //} Animasi sebelum tampil
        animate={{ opacity: isOpen ? 1 : isMobile? 0 : 1, y: isOpen ? 0 : isMobile ? -20 : 0 }} // Animasi ketika toggle
        transition={{ duration: 0.5 }}    // Durasi animasi
        className={`flex items-center space-x-8 ${isOpen ? 'flex' : 'hidden'} mr-44 md:flex`}
      >
        <a href="/comingsoon" className="text-[#E9557F] font-semibold hover:text-pink-500">Voting</a>
        <button className="bg-[#E9557F] w-48 text-sm md:text-base font-semibold text-white py-2 px-6 rounded-lg hover:bg-pink-400">
          <a href="/comingsoon">
            Dapatkan Tiket
          </a>
        </button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
