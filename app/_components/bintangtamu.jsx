"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const BintangTamu = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  // Start animation when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');  // Start the animation when in view
    } else {
      controls.start('hidden');   // Reset the animation when out of view
    }
  }, [controls, inView]);

  // Animation variants
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#E9557F] p-8 flex flex-col items-center relative font-poppins">
      <div className="bg-white shadow-md rounded-lg p-3 mb-8 w-48 text-center font-bold text-[#E9557F] text-xl">
        Bintang Tamu
      </div>

      {/* Star Element */}
      <div className="absolute left-0 transform -translate-y-1/2 z-0 mt-[12rem]">
        <img
          src="/star-pink.svg"
          alt="Star"
          className="w-[80%] opacity-50"
          style={{ filter: 'brightness(0) saturate(100%)' }}
        />
      </div>

      {/* Container - 1:1 (for mobile) */}
      <div className="md:hidden flex flex-col md:flex-row justify-around items-center w-full max-w-4xl space-y-4 md:space-x-2 md:space-y-0 relative z-10 mb-[2rem]">
        {Array(3).fill().map((_, index) => (
          <motion.div
            key={index}
            className="relative text-center rounded-lg border-[#D9D9D9] border-2 w-[15rem] h-[15rem] lg:w-auto overflow-hidden"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInScale}
          >
            <img src="/tba-guest.svg" alt={`Guest ${index + 1}`} className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[rgba(255,255,255,0.25)] to-transparent rounded-b-lg">
              <div className="flex">
                <p className="font-semibold text-2xl text-start ml-[1rem] -mt-[10px]">To Be Announced</p>
                <img src="/play-button.svg" alt="play-button" className="mr-[1rem]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Container for larger screens */}
      <div className="hidden md:flex flex-col md:flex-row justify-around items-center w-full max-w-4xl space-y-4 md:space-x-2 md:space-y-0 relative z-10 mb-[2rem]">
        {Array(3).fill().map((_, index) => (
          <motion.div
            key={index}
            className="relative text-center rounded-lg border-[#D9D9D9] border-2 w-[18rem]"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInScale}
          >
            <img src="/tba-guest.svg" alt={`Guest ${index + 1}`} className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[rgba(255,255,255,0.25)] to-transparent rounded-b-lg">
              <div className="flex">
                <p className="font-bold md:text-2xl text-3xl text-start ml-[1rem]">To Be Announced</p>
                <img src="/play-button.svg" alt="play-button" className="mr-[1rem]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BintangTamu;
