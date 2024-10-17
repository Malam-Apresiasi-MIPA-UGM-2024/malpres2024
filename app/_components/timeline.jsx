"use client";

const Timeline = () => {
  return (
    <div className="bg-[url('/bg-timeline.svg')] bg-cover bg-center p-8 flex flex-col items-center relative w-[100%] font-poppins">
      {/* Animated Text at the Top */}
      <div className="bg-[#FFFBE6] text-[#E92F77] text-[32px] flex justify-around overflow-hidden absolute top-0 left-0 right-0 border-t-2 border-b-2 border-black">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
        </div>
      </div>

        <div className="bg-white rounded-lg p-2 mb-8 w-48 text-center font-bold text-[#E9557F] text-xl relative z-10 border-2 border-black">
            Timeline
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-2 relative z-10 mb-[4rem]">
          {/* Box */}
          <div className="text-center">
            <div className="rounded-lg bg-[url('/Ticketing.svg')] bg-center bg-no-repeat lg:w-[18rem] w-[15rem] lg:h-[18rem] h-[15rem] relative flex flex-col justify-between items-center overflow-hidden">
              {/* Date */}
              <div className="w-full bg-[#E9557F] text-white py-2 flex justify-center items-center">
                <p className="text-lg font-bold">2 November 2024</p>
              </div>
              <p className="text-4xl font-bold mt-4 mb-6">Ticketing</p>
            </div>
          </div>
          {/* End of Box */}
          {/* Box */}
          <div className="text-center">
            <div className="rounded-lg bg-[url('/TBA.svg')] bg-center bg-no-repeat lg:w-[18rem] w-[15rem] lg:h-[18rem] h-[15rem] relative flex flex-col justify-between items-center overflow-hidden">
              {/* Date */}
              <div className="w-full bg-[#E9557F] text-white py-2 flex justify-center items-center">
                <p className="text-lg font-bold">TBA</p>
              </div>
              <p className="text-4xl font-bold mt-4 mb-6">Live Show</p>
            </div>
          </div>
          {/* End of Box */}
          {/* Box */}
          <div className="text-center">
            <div className="rounded-lg bg-[url('/Voting.svg')] bg-center bg-no-repeat lg:w-[18rem] w-[15rem] lg:h-[18rem] h-[15rem] relative flex flex-col justify-between items-center overflow-hidden">
              {/* Date */}
              <div className="w-full bg-[#E9557F] text-white py-2 flex justify-center items-center">
                <p className="text-lg font-bold">23 Oktober 2024</p>
              </div>
              <p className="text-4xl font-bold mt-4 mb-6">Voting</p>
            </div>
          </div>
          {/* End of Box */}
          
          
        </div>

      {/* Animated Text at the Bottom */}
      <div className="bg-[#FFFBE6] text-[#E92F77] text-[32px] flex justify-around overflow-hidden absolute bottom-0 left-0 right-0 border-t-2 border-b-2 border-black">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
          <span className="mx-40 font-poppins">Malam Apresiasi MIPA 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;