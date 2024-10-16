"use client";

const Tema = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/bg-tema.svg')] bg-cover bg-center w-full h-full">
      <div className="w-[14rem] bg-[#FFFFFF] p-3 rounded-lg mt-[8rem]">
        <h2 className="text-xl font-bold text-center text-[#E9557F]">Tentang MALPRES</h2>
      </div>
      <div className="mt-4">
      <h1
        className="text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-center"
      >
        ADARA GANA SIDDHI
      </h1>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-center text-[#EEC4A9]"
        style={{
          WebkitTextStroke: '1px #000000',
        }}>
          Penghargaan. Pencapaian. Kesempurnaan
        </h2>
      </div>
      <div className="mb-[8rem] mt-[1rem]">
        <p className="text-center">
        Puncak keberhasilan dari semua perjuangan/kontribusi yang telah diusahakan oleh seluruh warga FMIPA (dosen/mahasiswa/tendik/lembaga) untuk <br />
        mewujudkan FMIPA yang semakin solid dan unggul.
        </p>
      </div>
    </div>
  );
};

export default Tema;