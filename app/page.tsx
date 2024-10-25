"use client";

import React, { useEffect, useRef } from 'react';
import Header3 from './components/Header3';
import Header from './components/Header';
import Header2 from './components/Header2';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null); // Ensure TypeScript type

  // No need for useEffect related to LocomotiveScroll
  return (
    <div ref={scrollRef} className="font-work">
      <Header3 />
      <Header />
      <Header2 />
    </div>
  );
}
