"use client";

const KilasBalik = () => {
  return (
    <div className="flex flex-col items-center mt-[4rem] bg-[#E9557F] h-[25rem] z-0 md:h-[40rem] font-poppins">
      <div className="bg-[url('/titik-kilas.svg')] bg-cover bg-no-repeat w-full h-screen flex flex-col justify-center items-center mb-[2rem]">
        <h1 className="text-xl font-bold bg-[#FFFFFF] p-[1rem] rounded-lg text-[#E9557F] mt-[2rem]">Kilas Balik MALPRES</h1>
        <div className="">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lAoKGOW_CTg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg w-[18rem] h-[15rem] md:w-[40rem] md:h-[30rem] lg:w-[1000px] lg:h-[480px] mt-[2rem]"
        ></iframe>
        </div>
      </div>
    </div>
  );
};

export default KilasBalik;