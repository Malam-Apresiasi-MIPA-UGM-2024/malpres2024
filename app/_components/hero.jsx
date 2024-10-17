import React from 'react';

const Hero = () => {
  return (
    <div className="md:mt-[6rem] mt-[90px] relative font-poppins">
      <div
        className="w-[97vw] h-[550px] md:h-[600px] lg:bg-[url('/banner_malpres.webp')] md:bg-[url('/banner_malpres_mdsm.webp')] bg-[url('/banner_malpres_sm.webp')] mx-auto mt-8 bg-cover bg-center border-2 border-[#E9557F] rounded-lg"
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <img src="/logo-hero-malpres.svg" alt="Malpres Logo" className="w-512 h-512" />
        </div>
        <div className="absolute inset-x-0 bottom-8 w-[280px] md:w-[500px] md:h-16 bg-white mx-auto md:flex md:justify-between justify-center text-center items-center p-2 rounded-lg z-10">
          <span className="md:text-lg text-base font-bold text-[#E9557F] md:ml-[0.5rem]">Dapatkan Tiket Sekarang!</span>
          <a href="/comingsoon">
          <button className="bg-[#E9557F] font-semibold text-white text-sm md:text-base lg:text-lg py-2 px-4 w-64 md:w-56 rounded-lg hover:bg-pink-400">
            Dapatkan Sekarang
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;