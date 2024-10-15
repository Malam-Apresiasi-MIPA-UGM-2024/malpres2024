import Image from 'next/image';

const Comingsoon = () => {
    return (
        <div className="relative bg-[url('/sm-comingsoon.svg')] md:bg-[url('/md-comingsoon.svg')] lg:bg-[url('/lg-comingsoon.svg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
            {/* Logo di pojok kiri atas */}
            <div className="absolute top-5 left-5 hidden md:block">
                <Image
                    src="/logo_malpres.svg"
                    alt="Malpres Logo" width={120}
                    height={120}
                    className="filter invert brightness-0"
                />
            </div>

            {/* Bagian tengah */}
            <div className="text-center flex flex-col items-center">
                <div className="w-[360px] md:w-[528px] lg:w-[640px] mt-24 md:mt-16 lg:mt-12">
                    <Image
                        src="/comingsoon-text.svg"
                        alt="Coming Soon"
                        width={640}
                        height={640}
                        layout="responsive"
                    />
                </div>
                <div className="bg-[#F8E6D2] text-[#E9557F] font-poppins px-3 py-2 text-xs md:text-sm lg:text-base font-semibold rounded-lg shadow-lg mt-20 md:mt-12 lg:mt-8">
                    <p>Halaman ini akan segera datang!!!</p>
                </div>
                <button className="mt-3 bg-[#E9557F] font-poppins text-[#F8E6D2] font-bold md:text-xl lg:font-semibold lg:text-2xl px-4 py-1 lg:py-2 rounded-xl shadow-lg border-2 border-[#F8E6D2] hover:bg-pink-600">
                    Kembali ke beranda
                </button>
            </div>
        </div>
    );
}

export default Comingsoon;
