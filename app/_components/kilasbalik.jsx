"use client";

const KilasBalik = () => {
  return (
    <div className="flex flex-col items-center mt-[4rem] bg-[#E9557F] h-[25rem] z-0 md:h-[40rem] font-poppins">
      <div className="bg-[url('/titik-kilas.svg')] bg-cover bg-no-repeat w-full flex flex-col justify-center items-center mb-[2rem]">
        <h1 className="text-xl font-bold bg-[#FFFFFF] p-[1rem] rounded-lg text-[#E9557F] mt-[2rem]">Kilas Balik MALPRES</h1>
        <div className="flex justify-center items-center w-full mt-[2rem]">
          <iframe
            width="600"
            height=""
            src="https://www.youtube.com/embed/lAoKGOW_CTg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg md:w-[70vw] md:h-[50vh] w-[80vw] h-[25vh]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default KilasBalik;