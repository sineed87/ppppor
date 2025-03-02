'use client';

import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex justify-between items-center mt-80 ml-10 ">
      {/* Left Side - Two Text Blocks */}
      <div className="flex flex-col md:flex-row gap-10 text-white text-sm font-is font-extralight">
        <div className="text-left">
          <p>Strategy, Design,</p>
          <p>and Performance.</p>
        </div>
        <div className="text-left">
          <p>Two Engagement</p>
          <p>Models: Cash or Equity.</p>
        </div>
      </div>

      {/* Right Side - Arrow Down */}
      <ArrowDown size={20} strokeWidth={1} className='text-white mr-10' />
    </div>
  );
}
