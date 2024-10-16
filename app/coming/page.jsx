"use client"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Comingsoon = () => {
    const textRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const [loading, setLoading] = useState(true); // State untuk loading screen

    useEffect(() => {
        // Set timeout untuk simulasi waktu loading
        const timeout = setTimeout(() => {
            setLoading(false); // Menyembunyikan loading screen setelah selesai
        }, 3000); // Sesuaikan dengan waktu yang kamu inginkan

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%", // Mulai animasi ketika 80% elemen terlihat
                toggleActions: "play none none reset", // Mengulang animasi ketika scroll ke atas lagi
            }
        });

        // Tambahkan animasi untuk elemen-elemen
        timeline
            .fromTo(
                textRef.current,
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, duration: 4, ease: "power2.out" }
            )
            .fromTo(
                paragraphRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
                "-=0.5"
            )
            .fromTo(
                buttonRef.current,
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
                "-=0.5"
            );
    }, []);

    return (
        <div>
            {/* Loading screen */}
            <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                 style={{ background: "linear-gradient(180deg, #B7CB99 0%, #E4BBC8 50%, #FFBACE 100%)" }}>
                {/* Animasi silver-malpres */}
                <div className="animate-pulse">
                    <Image
                        src="/silver-malpres.png"
                        alt="Silver Malpres"
                        width={600}
                        height={600}
                    />
                </div>
            </div>

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
                    <button ref={buttonRef} className="mt-3 bg-[#E9557F] font-poppins text-[#F8E6D2] font-bold md:text-xl lg:font-semibold lg:text-2xl px-4 py-1 lg:py-2 rounded-xl shadow-lg border-2 border-[#F8E6D2] hover:bg-pink-600">
                        Kembali ke beranda
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Comingsoon;
