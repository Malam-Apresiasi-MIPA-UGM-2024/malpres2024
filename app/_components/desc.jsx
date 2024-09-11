const Desc = () => {
    return (
      <>
        <div
          style={{
            backgroundImage: "linear-gradient(to bottom, #B7BC99, #FFBACE)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
            <div
            style={{
                backgroundImage: "url('/titik-titik.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
                {/* Title */}
                <div className="flex justify-center items-center min-h-[2rem] mt-[2rem]">
                    <div className="w-2/3 md:w-1/3 lg:w-1/4 bg-[#FFFFFF] p-4 rounded-lg border-2 border-[#E9557F]">
                    <h2 className="text-xl font-bold text-center text-[#E9557F]">Tentang Malpres</h2>
                    </div>
                </div>
                {/* Description */}
                <div className="flex justify-center items-center mt-4">
                    <div className="w-[90vw] bg-[#F8E6D2] rounded-lg p-[2rem]">
                    <p className="text-base text-[#1E1E1E] font-[550] text-[1.2rem]">
                        <span className="text-[#DA1C5C] text-[2rem] font-semibold">Malam Apresiasi</span> adalah Event tahunan yang diselenggarakan oleh dan untuk KM FMIPA UGM, bertujuan untuk menghargai prestasi anggota dalam bidang akademik dan non-akademik. Ini adalah momen istimewa untuk mengakui dan merayakan berbagai pencapaian, inovasi, dan kreasi individu serta organisasi di Fakultas MIPA.
                    </p>
                    </div>
                </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Desc;