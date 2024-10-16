"use client"
import { useState, useEffect } from "react";

const HeroSection = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Function to check when background image is loaded
            const img = new Image();
            const backgroundUrl = getBackgroundImageUrl(); // Custom function to get current background image based on viewport
            img.src = backgroundUrl;

            img.onload = () => {
                setImageLoaded(true);
            };
            setBackgroundImageUrl(backgroundUrl); // Set the correct image URL after detecting window
        }
    }, []);

    // Helper function to get the correct background image based on window size
    const getBackgroundImageUrl = () => {
        if (window.innerWidth >= 1024) {
            return "/lg-nominasihero.svg"; // Large screens
        } else if (window.innerWidth >= 768) {
            return "/md-nominasihero.svg"; // Medium screens
        } else {
            return "/nominasihero.svg"; // Small screens
        }
    };

    return (
        <div
            className={`bg-cover bg-center bg-no-repeat mt-24 mx-5 min-w-[360px] min-h-[34rem] rounded-3xl flex flex-col justify-center items-center transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"
                }`}
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
            }}
        >
            <div className={`flex flex-col items-center`}>
                <h1
                    className="text-7xl md:text-8xl mb-5 py-10 font-extrabold text-white whitespace-pre-wrap"
                    style={{
                        WebkitTextStroke: '3px #DA1C5C',
                    }}
                >
                    Nominasi<br />Apresiasi
                </h1>
                <p className="text-lg font-bold mb-10 text-white">
                    Lorem ipsum dolor sit amet
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
