"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

const LoadingScreen = ({ setLoading }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Simulasi loading selama 2 detik
        const timeout = setTimeout(() => {
            setIsVisible(false); // Sembunyikan loading screen setelah 2 detik
            setLoading(false); // Mengirim status loading ke parent
        }, 2000);

        return () => clearTimeout(timeout);
    }, [setLoading]);

    return (
        <div className={`fixed inset-0 flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ background: "linear-gradient(180deg, #B7CB99 0%, #E4BBC8 50%, #FFBACE 100%)" }}>
            {/* Animasi silver-malpres */}
            <div className="animate-flipX mt-8">
                <Image
                    src="/silver-malpres.png"
                    alt="Silver Malpres"
                    width={480}
                    height={480}
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
