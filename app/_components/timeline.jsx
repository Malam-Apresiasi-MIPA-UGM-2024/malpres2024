"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Timeline = () => {
  // Animation control
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
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div className="bg-[url('/bg-timeline.svg')] bg-cover bg-center p-8 flex flex-col items-center relative w-[100%] font-poppins">
      {/* Animated Text at the Top */}
      <div className="bg-[#FFFBE6] text-[#E92F77] text-[32px] font-semibold flex justify-around overflow-hidden absolute top-0 left-0 right-0 border-t-2 border-b-2 border-[#E9557F]">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
        </div>
      </div>

      {/* Timeline title */}
      <div className="bg-white rounded-lg p-2 mb-8 w-48 text-center font-bold text-[#E9557F] text-xl relative z-10 border-2 border-[#AD285C]">
        Timeline
      </div>

      {/* Animated Boxes (Scroll-triggered) */}
      <div ref={ref} className="flex flex-col md:flex-row justify-around items-center w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-2 relative z-10 mb-[4rem]">
        {/* Box 1 */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate={controls}
          variants={fadeInScale}
        >
          <div className="shadow-md rounded-lg bg-[url('/Ticketing.svg')] bg-center bg-no-repeat lg:w-[18rem] w-[15rem] lg:h-[18rem] h-[15rem] relative flex flex-col justify-between items-center overflow-hidden">
            <div className="w-full bg-[#E9557F] text-white py-2 flex justify-center items-center">
              <p className="text-lg font-bold">2 November 2024</p>
            </div>
            <p className="text-4xl text-white font-bold mt-4 mb-6">Ticketing</p>
          </div>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate={controls}
          variants={fadeInScale}
          transition={{ delay: 0.2 }}
        >
          <div className="shadow-md rounded-lg bg-[url('/TBA.svg')] bg-center bg-no-repeat lg:w-[18rem] w-[15rem] lg:h-[18rem] h-[15rem] relative flex flex-col justify-between items-center overflow-hidden">
            <div className="w-full bg-[#E9557F] text-white py-2 flex justify-center items-center">
              <p className="text-lg font-bold">TBA</p>
            </div>
            <p className="text-4xl text-white font-bold mt-4 mb-6">Live Show</p>
          </div>
        </motion.div>

        {/* Box 3 */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate={controls}
          variants={fadeInScale}
          transition={{ delay: 0.4 }}
        >
          <div className="shadow-md rounded-lg bg-[url('/Voting.svg')] bg-center bg-no-repeat lg:w-[18rem] w-[15rem] lg:h-[18rem] h-[15rem] relative flex flex-col justify-between items-center overflow-hidden">
            <div className="w-full bg-[#E9557F] text-white py-2 flex justify-center items-center">
              <p className="text-lg font-bold">28 Oktober 2024</p>
            </div>
            <p className="text-4xl text-white font-bold mt-4 mb-6">Voting</p>
          </div>
        </motion.div>
      </div>

      {/* Animated Text at the Bottom */}
      <div className="bg-[#FFFBE6] text-[#E92F77] text-[32px] font-semibold flex justify-around overflow-hidden absolute bottom-0 left-0 right-0 border-t-2 border-b-2 border-[#E9557F]">
        <div className="animate-marqueeReverse whitespace-nowrap">
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
