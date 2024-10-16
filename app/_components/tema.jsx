"use client";

const Tema = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/bg-tema.svg')] bg-cover bg-center w-full h-full">
      <div className="w-auto py-2 px-3 bg-[#FFFFFF] rounded-lg mt-[8rem] mb-[2rem] ">
        <h2 className="text-xl font-bold text-center text-[#E9557F]">Tema MALPRES</h2>
      </div>
      <div className="mt-4">
      <h1
        className="text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-center"
      >
        ADARA GANA SIDDHI
      </h1>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-extrabold text-center text-[#EEC4A9] mt-[1rem]"
        style={{
          WebkitTextStroke: '0.5px #000000',
        }}>
          Penghargaan. Pencapaian. Kesempurnaan
        </h2>
      </div>
      <div className="mx-[1rem] mb-[8rem] mt-[1rem]">
        <p className="text-center">
        Puncak keberhasilan dari semua perjuangan/kontribusi yang telah diusahakan oleh seluruh warga FMIPA (dosen/mahasiswa/tendik/lembaga) untuk <br />
        mewujudkan FMIPA yang semakin solid dan unggul.
        </p>
      </div>
    </div>
  );
};

export default Tema;