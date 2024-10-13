const Hero = () => {
  return (
    <div className="relative w-[98.9vw] h-auto mx-auto bg-cover bg-center">
      {/* Buletbulet.svg diatur sebagai background terpisah */}
      <div
        className="absolute inset-0 opacity-50 md:w-[98.6vw] h-[100vw] sm: w-[0vw]"
        style={{
          backgroundImage: "url('/buletbulet.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      <div className="relative">
        <div>
          <div>
            <div>
              <button className="rounded-lg bg-white py-2 px-5 my-10 mx-12 relative">
                <a href="/" className="text-lg flex items-center">
                  <svg
                    className="h-6 w-6 text-darkPink hover:text-secondary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="5" y1="12" x2="11" y2="18" />
                    <line x1="5" y1="12" x2="11" y2="6" />
                  </svg>
                  <p className="inline-block ml-2 pl-2 text-darkPink font-poppins font-semibold hover:text-secondary">
                    Kembali
                  </p>
                </a>
              </button>
            </div>
            <div className="relative mt-10">
              <div className="text-center">
                <h1 className="text-8xl font-poppins font-extrabold text-stroke">
                  Judul Apresiasi
                </h1>
              </div>
              <div className="text-center mt-8">
                <h3 className="text-2xl font-poppins font-semibold text-[#6F2A3D]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex nobis ipsam fugit, veritatis perspiciatis.
                </h3>
              </div>
            </div>
          </div>

          <div className="mx-20 mt-14">
            <div className="flex flex-wrap gap-9 justify-items-center">
              {Array(7).fill(0).map((_, index) => (
                <div key={index} className="relative lg:w-[23rem] h-[32rem] md:w-[19rem] h-[30] bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/realityclub.svg"
                    alt="Nama Nominasi"
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4 absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent">
                    <h2 className="text-4xl font-poppins font-bold  text-white">
                      Nama Nominasi
                    </h2>
                    <p className="text-base font-poppins font-normal text-white mb-4">
                      (Jurusan - Angkatan)
                    </p>
                    <p className="text-base font-poppins font-normal text-white mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="mt-4 py-2 px-4 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 w-full">
                      Vote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
