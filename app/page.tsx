"use client";

import React, { useEffect, useRef } from 'react';
import Header3 from './components/Header3';
import Header from './components/Header';
import Header2 from './components/Header2';
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null); // Ensure TypeScript type

  useEffect(() => {
    // Ensure LocomotiveScroll runs only on the client
    if (typeof window !== "undefined" && scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      // Clean up on component unmount
      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} className="font-work">
      <Header3 />
      <Header />
      <Header2 />
    </div>
  );
}
