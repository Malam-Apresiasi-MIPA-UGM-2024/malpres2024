"use client";

const KilasBalik = () => {
  return (
    <div className="flex flex-col items-center mt-[4rem] bg-[#E9557F] h-[30rem] z-0 h-[40rem] ">
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
          className="rounded-lg w-full h-64 md:w-96 md:h-56 lg:w-[1080px] lg:h-[480px] mt-[2rem]"
        ></iframe>
        </div>
      </div>
    </div>
  );
};

export default KilasBalik;