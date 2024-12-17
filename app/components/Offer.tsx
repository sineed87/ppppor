import { ArrowUpRight } from 'lucide-react';
import React, { useRef } from 'react';

const Offer = () => {
  const videoRefs = {
    concepting: useRef<HTMLVideoElement | null>(null),
    production: useRef<HTMLVideoElement | null>(null),
    editing: useRef<HTMLVideoElement | null>(null),
    motion: useRef<HTMLVideoElement | null>(null),
    distribution: useRef<HTMLVideoElement | null>(null),
  };

  const handleMouseEnter = (section: keyof typeof videoRefs) => {
    const video = videoRefs[section].current;
    if (video) {
      video.play();
      video.style.visibility = 'visible';
    }
  };

  const handleMouseLeave = (section: keyof typeof videoRefs) => {
    const video = videoRefs[section].current;
    if (video) {
      video.pause();
      video.style.visibility = 'hidden';
    }
  };

  return (
    <div className="font-is pl-20 mt-[50px] mb-[80px]">
      <div className="flex flex-col pl-10">
        <div className="pb-20">
          <h1 className="text-sm font-bold text-[#EE656C] mb-2">[OUR SERVICES]</h1>
          <div className="flex items-center">
            <h1 className="text-6xl font-hel font-normal flex items-center leading-tight">
              What We Do <ArrowUpRight strokeWidth={1} size={64} />
            </h1>
          </div>
        </div>
      </div>

      <div className="ml-20 mt-20 space-y-14">
        {[
          { id: '[01]', title: 'CONCEPTING', video: '/videos/code2.mp4', ref: 'concepting' },
          { id: '[02]', title: 'PRODUCTION', video: '/videos/code.mp4', ref: 'production' },
          { id: '[03]', title: 'EDITING', video: '/videos/img1.mp4', ref: 'editing' },
          { id: '[04]', title: 'MOTION', video: '/videos/sp1.mp4', ref: 'motion' },
          { id: '[05]', title: 'DISTRIBUTION', video: '/videos/sp2.mp4', ref: 'distribution' },
        ].map((section, index) => (
          <div
            key={index}
            className="flex items-center group hover:text-[#EE656C]"
            onMouseEnter={() => handleMouseEnter(section.ref as keyof typeof videoRefs)}
            onMouseLeave={() => handleMouseLeave(section.ref as keyof typeof videoRefs)}
          >
            <h1 className="z-10 ml-10 text-5xl font-dm font-bold">{section.id}</h1>
            <h1 className="ml-[200px] text-5xl font-dm font-medium z-10">{section.title}</h1>
            <div className="absolute w-[1200px] h-[112px] flex justify-center items-center">
              <video
                ref={videoRefs[section.ref as keyof typeof videoRefs]}
                src={section.video}
                className="absolute rounded-[80px] top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                muted
                loop
                style={{ visibility: 'hidden' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
