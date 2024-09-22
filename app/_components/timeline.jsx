"use client";

const Timeline = () => {
  return (
    <div className="bg-[url('/bg-timeline.svg')] bg-cover bg-center p-8 flex flex-col items-center relative w-[100%]">
      {/* Animated Text at the Top */}
      <div className="bg-[#FFFBE6] text-[#E92F77] text-[32px] flex justify-around overflow-hidden absolute top-0 left-0 right-0 border-2 border-black">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-40">Malpres 2024</span>
          <span className="mx-40">Malpres 2024</span>
          <span className="mx-40">Malpres 2024</span>
        </div>
      </div>

        <div className="bg-white rounded-lg p-2 mb-8 w-48 text-center font-bold text-[#E9557F] text-xl relative z-10 border-4 border-black">
            Timeline
        </div>
      <div className="flex justify-around w-full max-w-4xl space-x-2 relative z-10 mb-[2rem]">
        <div className="text-center">
          <img src="/img-timeline.svg" alt="Guest 1" className="w-full rounded-lg" />
        </div>
        <div className="text-center">
          <img src="/img-timeline.svg" alt="Guest 2" className="w-full rounded-lg" />
        </div>
        <div className="text-center">
          <img src="/img-timeline.svg" alt="Guest 3" className="w-full rounded-lg" />
        </div>
      </div>

      {/* Animated Text at the Bottom */}
      <div className="bg-[#FFFBE6] text-[#E92F77] text-[32px] flex justify-around overflow-hidden absolute bottom-0 left-0 right-0 border-2 border-black">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-40">Malpres 2024</span>
          <span className="mx-40">Malpres 2024</span>
          <span className="mx-40">Malpres 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;