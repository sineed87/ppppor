// app/page.tsx
"use client";

import React, { useRef } from 'react';
import Header3 from './components/Header3';          // Default export check
import Header from './components/Header';            // Default export check
import Header2 from './components/Header2';          // Default export check
import SmoothScroll from './components/SmoothScroll';// Default export check
import RevealLinks from "./components/RevealLinks";
import Card from "./components/Card";
import About from "./components/About";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={scrollRef} className="font-work">
      <SmoothScroll>
        <Header3 />
        
        <div className="flex bg-[#4801FF]">
          <div className="w-full font-work">
            <Header2 />
          </div>
        </div>

        <div className="bg-[#4801FF]">
          <Card />
        </div>

        <About />

        <div className="flex bg-[#4801FF]">
          <div className="w-full font-work">
            <Header2 />
          </div>
        </div>

      </SmoothScroll>
    </div>
  );
}
