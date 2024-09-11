import React from 'react';

const Hero = () => {
  return (
    <div className="mt-28 relative">
      <div
        className="w-[97vw] h-[calc(85vw*3/7)] bg-black mx-auto mt-8 bg-cover bg-center border-t-2 border-b-2 border-[#E9557F] rounded-lg"
        style={{ backgroundImage: "url('/banner_malpres.svg')" }}
      >
        <div className="absolute inset-x-0 bottom-8 w-[90%] max-w-[639px] h-16 bg-white mx-auto flex justify-between items-center p-2 rounded-lg z-10">
          <span className="text-lg font-bold text-[#E9557F]">Beli Tiket Malam Apresiasi Sekarang!</span>
          <button className="bg-[#E9557F] text-white py-2 px-4 w-56 rounded-lg hover:bg-pink-400">
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;