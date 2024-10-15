"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, desc }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        // Apply GSAP animation on the Card when it comes into view
        gsap.fromTo(
            cardRef.current,
            {
                opacity: 0,
                scale: 0.5,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%", // Starts animation when top of the card is 80% from the top of the viewport
                    toggleActions: "play reverse play reverse", // Play the animation on scroll
                },
            }
        );
    }, []);

    return (
        <div
            ref={cardRef}
            className="bg-white shadow-md w-56 flex flex-col justify-center items-start md:flex-row md:justify-start md:w-full md:h-40"
        >
            <div className="border bg-[#D9D9D9] min-h-44 h-full w-full md:min-h-40 md:min-w-44 md:max-w-48 lg:min-w-48">
                <img src="" alt="" />
            </div>
            <div className="min-h-60 w-auto py-2 px-4 flex flex-col sm:justify-evenly flex-grow md:flex md:flex-row lg:min-h-auto ">
                <div className="flex flex-col w-auto mb-auto lg:mt-4 md:pr-10">
                    <div>
                        <h2 className=" text-xl font-bold text-[#E9557F] lg:text-2xl">{title}</h2>
                    </div>
                    <div>
                        <p className="text-xs md:text-sm lg:text-base mt-0 text-black mb-2 ">{desc}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mb-2 md:mb-8 lg:mb-12 ">
                    <button className="w-48 h-11 md:w-44 md:text-lg border bg-[#E9557F] text-white rounded-md text-sm font-semibold py-1.5">
                        Beri Pilihanmu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
