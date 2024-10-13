const HeroSection = () => {
    return (
        <div className="mt-24 mx-5 py-16 min-w-[360px] min-h-[34rem] rounded-3xl bg-cover bg-center flex flex-col justify-center items-center"
            style={{
                backgroundImage: "linear-gradient(to top, rgba(255, 10, 140, 0.8), rgba(250, 164, 174, 0.3)), url('/bg-banner_nominasi.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div>
                <h1 className="text-7xl md:text-8xl py-10 font-extrabold text-white white-space: pre-wrap "
                >Nominasi<br />Apresiasi</h1>
            </div>
            <p className="text-lg font-bold mt-4 text-white">Lorem ipsum dolor sit amet</p>

        </div>
    )
}

export default HeroSection;