'use client';

import { useEffect, useState } from 'react';

const ScrollingItems = () => {
  const images = [
    '/images/a1.png',
    '/images/a2.png',
    '/images/a3.png',
    '/images/a4.png',
    '/images/a11.png',
    '/images/a6.png',
    '/images/a7.png',
    '/images/a9.png',
  ];

  return (
    <div className="relative w-[90%] max-w-[1536px] mx-auto h-[300px] mt-20 overflow-hidden mask-gradient">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Scrolling item ${index + 1}`}
          className="absolute w-[200px] h-[300px] rounded-md animate-scroll"
          style={{ animationDelay: `${(-30 / 8) * (8 - index)}s` }}
        />
      ))}
      <style jsx>{`
        @keyframes scrollLeft {
          to {
            left: -200px;
          }
        }

        .animate-scroll {
          left: max(calc(200px * 9), 100%);
          animation-name: scrollLeft;
          animation-duration: 30s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .mask-gradient {
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0)
          );
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0)
          );
        }
      `}</style>
    </div>
  );
};

export default ScrollingItems;