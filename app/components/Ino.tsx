import React from "react";

const VideoDisplay: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center font-raleway bg-[#121212]">
            <div className="w-full h-[700px] relative p-5">
                {/* Video Section */}
                <video
                    className="w-full h-full object-cover rounded-[60px] shadow-lg filter grayscale "
                    autoPlay
                    muted
                    loop
                    controls
                >
                    <source src="/videos/code.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay Content */}
                <div className="absolute inset-0 font-hel flex flex-col items-left pl-20 justify-center  bg-opacity-80 text-white text-left">
                    <h1 className="text-9xl font-light mb-4">results that</h1>
                    <h1 className="text-9xl font-light mb-4">we sucessfully</h1>
                    <h1 className="text-9xl font-light mb-4">deliver</h1>
                    <p className="text-xl font-normal uppercase mb-6">
                    We’ll design a custom package that fits your project and goals.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoDisplay;
