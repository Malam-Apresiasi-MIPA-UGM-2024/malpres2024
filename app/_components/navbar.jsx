"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check if screen is < md and toggle isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md = 768px in Tailwind
    };
    handleResize(); // Call once on component mount
    window.addEventListener('resize', handleResize); // Attach event listener
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <motion.nav
      className="border-2 h-14 border-[#E9557F] py-3 px-[1rem] flex justify-between items-center mt-4 bg-[#FCD9C6] rounded-lg fixed top-0 z-20 font-poppins"
      initial={{ width: 0 }} // Width kecil saat awal render
      animate={{ width: 'calc(100% - 16px)', left: '8px', right: '8px' }} // Margin 4px di kiri dan kanan
      transition={{ duration: 1 }} // Durasi animasi 1 detik
    >

      {/* Logo */}
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: isOpen && isMobile ? 0 : 1, x: isOpen && isMobile ? 0 : 'auto' }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ duration: 1 }}
        className={`flex items-center ${isOpen && isMobile ? 'hidden' : ''}`} // Hide logo saat open di mobile
      >
        <Image
          src="/logo_malpres.svg"
          alt="Malpres Logo"
          width={isMobile ? 90 : 120}
          height={isMobile ? 90 : 120}
        />
      </motion.div>

      {/* Links */}
      <AnimatePresence>
        {(isOpen || !isMobile) && ( // Selalu tampil di layar besar atau saat toggle di mobile
          <motion.div
            initial={{ opacity: isMobile ? 0 : 1, x: isMobile ? 20 : 0 }}  // Animasi sebelum tampil hanya untuk mobile
            animate={{ opacity: 1, x: 0 }} // Animasi ketika toggle atau langsung tampil di layar besar
            exit={{ opacity: isMobile ? 0 : 1, x: isMobile ? 20 : 0 }} // Animasi saat keluar hanya di mobile
            transition={{ duration: 1 }}    // Durasi animasi
            className={`flex-grow flex items-center space-x-8 ml-4`} // flex-grow menyesuaikan ruang
          >
            <a href="/comingsoon" className="text-[#E9557F] font-semibold hover:text-pink-500">Voting</a>
            <button className="bg-[#E9557F] w-48 text-sm md:text-base font-semibold text-white py-2 rounded-lg hover:bg-pink-400">
              <a href="/comingsoon">
                Dapatkan Tiket
              </a>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Burger Button */}
      {isMobile && (  // Burger hanya muncul di layar kecil
        <motion.div className="absolute right-4 top-4 z-30"> {/* Tambah z-30 */}
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
      )}

    </motion.nav>
  );
};

export default Navbar;
