const BintangTamu = () => {
  return (
    <div className="bg-[#E9557F] p-8 flex flex-col items-center relative">
      <div className="bg-white rounded-lg p-6 mb-8 w-48 text-center font-bold text-[#E9557F] text-xl">
        Bintang Tamu
      </div>
      {/* Star Element */}
      <div className="absolute left-0 transform -translate-y-1/2 z-0 mt-[12rem]">
        <img src="/star-pink.svg" alt="Star" className="w-[80%] opacity-50" style={{ filter: 'brightness(0) saturate(100%)' }} />
      </div>
      {/* Container */}
      <div className="flex justify-around w-full max-w-4xl space-x-2 relative z-10 mb-[2rem]">
        <div className="text-center">
          <img src="/realityclub.svg" alt="Guest 1" className="w-full rounded-lg" />
        </div>
        <div className="text-center">
          <img src="/realityclub.svg" alt="Guest 2" className="w-full rounded-lg" />
        </div>
        <div className="text-center">
          <img src="/realityclub.svg" alt="Guest 3" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default BintangTamu;