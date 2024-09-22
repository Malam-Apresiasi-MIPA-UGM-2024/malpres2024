"use client";

const ApresiasiNominasi = () => {
  return (
    <div className="flex justify-center items-center relative">
      {/* Star Image */}
      <img
        src="/star-silver.svg"
        alt="Star Silver"
        className="absolute left-0 top-16 w-[32rem] z-50"
      />
      <div className="bg-white rounded-lg w-[95rem] relative text-center mt-[5rem]">
        <div className="relative">
          <img
            src="/bg-apresiasi.svg"
            alt="Apresiasi Nominasi"
            className="w-full h-auto rounded-lg opacity-90"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1
                className="text-[4rem] font-bold mb-2"
                style={{
                    WebkitTextStroke: '2px #E9557F',
                }}
                >
                Apresiasi Nominasi
            </h1>
            <p className="text-[1.75rem] mb-4">
              beri penghargaan terhadap yang terbaik atas pencapaian yang diraih
            </p>
            <button className="bg-[#E9557F] hover:bg-pink-600 text-white py-2 px-4 rounded-lg border-2 border-white text-[1.5rem]">
              Beri Pilihanmu Sekarang!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApresiasiNominasi;