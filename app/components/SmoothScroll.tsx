"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import React, { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode; // Define children as a prop
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return (
    <ReactLenis root>
      {children} {/* Render the children here */}
    </ReactLenis>
  );
};

export default SmoothScroll;
