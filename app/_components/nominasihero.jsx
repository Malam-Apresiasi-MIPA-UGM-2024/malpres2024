const HeroSection = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat mt-24 mx-5 min-w-[360px] min-h-[34rem] rounded-3xl flex flex-col justify-center items-center bg-[url('/nominasihero.svg')] md:bg-[url('/md-nominasihero.svg')] lg:bg-[url('/lg-nominasihero.svg')] ">
            <div className="">
                <h1 className="text-7xl md:text-8xl lg:text-9xl mb-5 py-10 font-extrabold text-white white-space: pre-wrap "
                style={{
                    WebkitTextStroke: '3px #DA1C5C',
                  }}
                >Nominasi<br />Apresiasi</h1>
            </div>
            <p className="text-lg font-bold mb-10 text-white">Lorem ipsum dolor sit amet</p>

        </div>
    )
}

export default HeroSection;