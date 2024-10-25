"use client";


import { ChevronsDown, SquareArrowOutUpRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function LandingPage() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setScrollY(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<div><div className="border-t-[1px] border-zinc-300 font-manrope uppercase mt-20 text-black flex justify-between items-center py-5 px-20">
        {["Ink Journey", "From the first pitch to IPO"].map((item, index) => (
            <div className="flex items-center" key={index}>
                {typeof item === 'string' ? (
                    <p className="text-md font-bold tracking-tight leading-none flex items-center">
                        {item}
                        <SquareArrowOutUpRight className="ml-2" />
                    </p>
                ) : (
                    item
                )}
            </div>
        ))}
    </div>
        <div className="w-full pt-1 relative overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 -z-15 w-full overflow-hidden p-20">
                <video
                    className="w-full h-full  shadow-xl object-cover "
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    {/* Direct URL path to the video in the public folder */}
                    <source src="/videos/img1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Main Content */}
            <div className="py-40 px-20 relative z-10">
                {/* Inkspire Text */}


                {/* "Start the project" button below the text */}
                <div className="start flex items-center gap-2 mt-10">

                </div>
            </div>

            {/* Flashing Text Section */}
            <div className="bg-transparent flex flex-col items-center mt-10">
                <FlashingText />
            </div>

            {/* Rest of the content below */}


        </div></div>
    );
}

// Flashing text component (Without Framer Motion)
const FlashingText = () => (
    <div className="flex flex-col items-center bg-transparent">
        {/* Flashing text with CSS animation */}
        <span className="flashing-text text-md font-semibold tracking-tight leading-none bg-transparent text-white animate-pulse">
            Scroll down
        </span>
        {/* Chevron down with simple CSS animation */}
        <div className="mt-1 flex items-center justify-center bg-transparent animate-bounce">
            <ChevronsDown className="text-md bg-transparent text-white" />
        </div>
    </div>
);

export default LandingPage;
