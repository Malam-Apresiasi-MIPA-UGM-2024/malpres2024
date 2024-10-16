"use client"
import Image from 'next/image';
import { useRef, useState } from 'react';
import LoadingScreen from '../_components/loadingscreen'; // Import komponen LoadingScreen

const Comingsoon = () => {
    const textRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const [loading, setLoading] = useState(true); // State untuk loading screen

    return (
        <div>
            {/* Memanggil LoadingScreen */}
            <LoadingScreen setLoading={setLoading} />

            {/* Konten utama */}
            <div className={`relative bg-[url('/sm-comingsoon.svg')] md:bg-[url('/md-comingsoon.svg')] lg:bg-[url('/lg-comingsoon.svg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
                {/* Logo di pojok kiri atas */}
                <div className="absolute top-5 left-5 hidden md:block">
                    <Image
                        src="/logo_malpres.svg"
                        alt="Malpres Logo"
                        width={120}
                        height={120}
                        className="filter invert brightness-0"
                    />
                </div>

                {/* Bagian tengah */}
                <div className="text-center flex flex-col items-center">
                    {/* Image "Coming Soon" */}
                    <div ref={textRef} className="w-[360px] md:w-[528px] lg:w-[640px] mt-24 md:mt-16 lg:mt-12">
                        <Image
                            src="/comingsoon-text.svg"
                            alt="Coming Soon"
                            width={640}
                            height={640}
                            layout="responsive"
                        />
                    </div>

                    {/* Paragraf */}
                    <div ref={paragraphRef} className="bg-[#F8E6D2] text-[#E9557F] font-poppins px-3 py-2 text-xs md:text-sm lg:text-base font-semibold rounded-lg shadow-lg mt-20 md:mt-12 lg:mt-8">
                        <p>Halaman ini akan segera datang!!!</p>
                    </div>

                    {/* Tombol */}
                    <a href="/" >
                    <button ref={buttonRef} className="mt-3 bg-[#E9557F] font-poppins text-[#F8E6D2] font-bold md:text-xl lg:font-semibold lg:text-2xl px-4 py-1 lg:py-2 rounded-xl shadow-lg border-2 border-[#F8E6D2] hover:bg-pink-600">
                        Kembali ke beranda
                    </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Comingsoon;
