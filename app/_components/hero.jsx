import React from 'react';

const Hero = () => {
  return (
    <div className="mt-28 relative">
      <div
        className="w-[97vw] h-[400px] md:h-[600px] bg-[#E9557F] mx-auto mt-8 bg-cover bg-center border-2 border-[#E9557F] rounded-lg"
        style={{ backgroundImage: "url('/banner_malpres.svg')" }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <img src="/logo-hero-malpres.svg" alt="Malpres Logo" className="w-512 h-512" />
        </div>
        <div className="absolute inset-x-0 bottom-8 w-[500px] h-16 bg-white mx-auto md:flex justify-between items-center p-2 rounded-lg z-10 hidden">
          <span className="text-lg font-bold text-[#E9557F] ml-[1rem]">Dapatkan Tiket Sekarang!</span>
          <button className="bg-[#E9557F] text-white text-sm md:text-base lg:text-lg py-2 px-4 w-56 rounded-lg hover:bg-pink-400">
            Dapatkan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;