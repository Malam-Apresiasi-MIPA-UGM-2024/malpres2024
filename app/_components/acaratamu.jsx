import React from 'react';

const Acaratamu = () => {
  return (
    <div className="bg-[#B7BC99] p-8 flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="relative z-10 bg-white rounded-lg p-3 mb-8 w-48 text-center font-bold text-[#E9557F] text-xl">
          Acara Tamu
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-around w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-2 mb-[2rem]">
          <div className="relative text-center border-white border-2 rounded-lg w-full md:w-auto">
            <img src="/realityclub.svg" alt="Guest 1" className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent rounded-b-lg"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/4 flex p-[1rem]">
              <p className="text-white font-bold text-2xl">To Be Announced</p>
            </div>
          </div>
          <div className="relative text-center border-white border-2 rounded-lg w-full md:w-auto">
            <img src="/realityclub.svg" alt="Guest 2" className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent rounded-b-lg"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/4 flex p-[1rem] text-3xl">
              <p className="text-white font-bold text-2xl">To Be Announced</p>
            </div>
          </div>
          <div className="relative text-center border-white border-2 rounded-lg w-full md:w-auto">
            <img src="/realityclub.svg" alt="Guest 3" className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent rounded-b-lg"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/4 flex p-[1rem] text-3xl">
              <p className="text-white font-bold text-2xl">To Be Announced</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex justify-center">
          <p className="bg-[#E9557F] text-[#F8E6D2] p-[0.5rem] border-2 border-white mr-[0.5rem] rounded-l-lg font-bold text-sm md:text-base lg:text-lg xl:text-xl">Lokasi</p>
          <p className="bg-[#FFFFFF] text-[#AD285C] p-[0.5rem] border-2 border-[#AD285C] rounded-r-lg font-bold text-sm md:text-base lg:text-lg xl:text-xl">Gelanggang Inovasi dan Kreativitas UGM</p>
        </div>
      </div>
    </div>
  );
};

export default Acaratamu;