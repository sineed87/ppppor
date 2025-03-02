'use client'; // Required for client-side components in Next.js App Router

import { useEffect, useRef } from 'react';

export const ScreenFitText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;

      if (!container || !text) return;

      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2500;

      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = `${mid}px`;

        if (text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }

      text.style.fontSize = `${max}px`;
    };

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(resizeText, 150);
    };

    resizeText();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex w-full items-center justify-center" ref={containerRef}>
      <div className="relative flex flex-col items-end">
        {/* The radial background pattern div placed in front of the text */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10"></div>

        <span
          className="relative mt-60 text-center text-xs font-is font-bold uppercase text-[#fff] z-20"
          ref={textRef}
        >
          studio
        </span>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10"></div>
        
      </div>
    </div>
  );
};
