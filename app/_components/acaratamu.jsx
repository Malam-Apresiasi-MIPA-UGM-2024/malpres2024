import React from 'react';

const Acaratamu = () => {
  return (
    <div className="relative bg-[url('/gikgum.jpg')] bg-cover bg-center p-8 flex flex-col items-center justify-center font-poppins">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#E9557F] opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="relative z-10 bg-white rounded-lg p-3 mb-8 w-48 text-center font-bold text-[#E9557F] text-xl">
          Acara Utama
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-around w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-2 mb-[2rem]">
          <div className="relative text-center border-white border-2 rounded-lg">
            <div className="relative rounded-lg overflow-hidden">
              <img src="/tba-acara.svg" alt="Guest 1" className="w-full object-cover" />
            </div>
          </div>
          <div className="relative text-center border-white border-2 rounded-lg">
            <div className="relative rounded-lg overflow-hidden">
              <img src="/tba-acara.svg" alt="Guest 1" className="w-full object-cover" />
            </div>
          </div>
          <div className="relative text-center border-white border-2 rounded-lg">
            <div className="relative rounded-lg overflow-hidden">
              <img src="/tba-acara.svg" alt="Guest 1" className="w-full object-cover" />
            </div>
          </div>
        </div>
        <div className="relative z-10 flex justify-center">
          <p className="bg-[#E9557F] text-[#F8E6D2] p-[0.5rem] border-2 border-white mr-[0.5rem] rounded-l-lg font-semibold text-sm md:text-base lg:text-lg xl:text-xl">Lokasi</p>
          <p className="bg-[#FFFFFF] text-[#AD285C] p-[0.5rem] border-2 border-[#AD285C] rounded-r-lg font-semibold text-sm md:text-base lg:text-lg xl:text-xl">Gelanggang Inovasi dan Kreativitas UGM</p>
        </div>
      </div>
    </div>
  );
};

export default Acaratamu;