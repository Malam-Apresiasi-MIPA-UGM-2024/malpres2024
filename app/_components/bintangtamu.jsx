"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const BintangTamu = () => {
  // Mengontrol animasi
  const controls = useAnimation();
  
  // Menggunakan useInView untuk mendeteksi ketika elemen dalam viewport
  const [ref, inView] = useInView({
    triggerOnce: false,  // Animasi bisa terjadi lebih dari sekali
    threshold: 0.2       // Memicu animasi ketika 20% dari elemen terlihat
  });

  // Mengatur animasi ketika elemen dalam view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Variabel animasi untuk muncul (fade-in dan slide-up)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut', staggerChildren: 0.2 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-[#E9557F] p-8 flex flex-col items-center relative font-poppins" ref={ref}>
      <motion.div
        className="bg-white rounded-lg p-3 mb-8 w-48 text-center font-bold text-[#E9557F] text-xl"
        initial="hidden"
        animate={controls}  // Animasi dikontrol oleh useInView
        variants={containerVariants}
      >
        Bintang Tamu
      </motion.div>

      {/* Star Element */}
      <motion.div
        className="absolute left-0 transform -translate-y-1/2 z-0 mt-[12rem]"
        initial={{ scale: 0, opacity: 0 }}
        animate={controls}  // Animasi dikontrol oleh useInView
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src="/star-pink.svg"
          alt="Star"
          className="w-[80%] opacity-50"
          style={{ filter: 'brightness(0) saturate(100%)' }}
        />
      </motion.div>

      {/* Container - 1:1 */}
      <motion.div
        className="md:hidden flex flex-col md:flex-row justify-around items-center w-full max-w-4xl space-y-4 md:space-x-2 md:space-y-0 relative z-10 mb-[2rem]"
        initial="hidden"
        animate={controls}  // Animasi dikontrol oleh useInView
        variants={containerVariants}
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="relative text-center rounded-lg border-[#D9D9D9] border-2 w-[15rem] h-[15rem] lg:w-auto overflow-hidden"
            variants={childVariants}
          >
            <img src="/tba-guest.svg" alt={`Guest ${index + 1}`} className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[rgba(255,255,255,0.25)] to-transparent rounded-b-lg">
              <div className="flex">
                <p className="font-semibold text-2xl text-start ml-[1rem] -mt-[10px]">
                  To Be Announced
                </p>
                <img src="/play-button.svg" alt="play-button" className="mr-[1rem]" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Container */}
      <motion.div
        className="hidden md:flex flex-col md:flex-row justify-around items-center w-full max-w-4xl space-y-4 md:space-x-2 md:space-y-0 relative z-10 mb-[2rem]"
        initial="hidden"
        animate={controls}  // Animasi dikontrol oleh useInView
        variants={containerVariants}
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="relative text-center rounded-lg border-[#D9D9D9] border-2 w-[18rem]"
            variants={childVariants}
          >
            <img src="/tba-guest.svg" alt={`Guest ${index + 1}`} className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[rgba(255,255,255,0.25)] to-transparent rounded-b-lg">
              <div className="flex">
                <p className="font-bold md:text-2xl text-3xl text-start ml-[1rem]">
                  To Be Announced
                </p>
                <img src="/play-button.svg" alt="play-button" className="mr-[1rem]" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BintangTamu;
