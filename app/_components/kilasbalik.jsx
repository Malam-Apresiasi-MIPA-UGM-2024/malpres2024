"use client";

const KilasBalik = () => {
  return (
    <div className="flex flex-col items-center mt-[4rem] bg-[#E9557F] h-[36rem] z-0">
      <h1 className="text-2xl font-bold mt-[6rem] bg-[#FFFFFF] p-[1.5rem] rounded-lg text-[#E9557F]">Kilas Balik MALPRES</h1>

      <div className="bg-[url('/titik-kilas.svg')] bg-cover bg-no-repeat w-full h-screen flex justify-center items-center mb-[2rem]">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lAoKGOW_CTg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default KilasBalik;
