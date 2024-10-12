
const Hero = () => {
  return (
    <div className="w-[98.9vw] h-[70vw] mx-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/buletbulet.svg')" }}
    >
      <div className="relative">
        <div>
          <div>
            <div>
              <button className="rounded-lg bg-white py-2 px-5 my-10 mx-12 relative">
                <a href="/" className="text-lg flex items-center">
                  <svg className="h-6 w-6 text-darkPink hover:text-secondary"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="11" y2="18" />  <line x1="5" y1="12" x2="11" y2="6" /></svg>
                  <p className="inline-block ml-2 pl-2 text-darkPink font-poppins font-semibold hover:text-secondary ">Kembali</p>
                </a>
              </button>
            </div>
            <div className="relative mt-10">
              <div className="text-center">
                <h1 className="text-9xl font-poppins font-extrabold text-stroke">Judul Apresiasi</h1>
              </div>
              <div className="text-center mt-8">
                <h3 className="text-2xl font-poppins font-semibold text-[#6F2A3D] text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex nobis ipsam fugit, veritatis perspiciatis.</h3>
              </div>
            </div>
          </div>
          <div className="mx-20 mt-14 bg-black">
            <div>
                <button className="rounded-lg bg-white py-2 px-5 my-10 mx-12 relative">
                  <a href="/" className="text-lg flex items-center">
                    <p className="inline-block text-darkPink font-bold text-2xl hover:text-secondary font-poppins">Nominasi</p>
                  </a>
                </button>
            </div>
            <div className="bg-slate-600 items-center">
              <div className="grid lg:grid-cols-3 mx-12" >
                <div className="w-[25vw] h-[30vw] bg-white " >
                  <img src="" alt="" />
                </div>
                <div className="w-[25vw] h-[30vw] bg-white" >
                  <img src="" alt="" />
                </div>
                <div className="w-[25vw] h-[30vw] bg-white" >
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;