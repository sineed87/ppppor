'use client';

export default function FeaturedSection() {
  return (
    <div className="flex flex-col w-full p-10 text-white">
      {/* Thin Black Line */}
      <div className="w-full border-t border-white mb-4" />

      {/* Text: W 01/04 */}
      <p className="text-sm mb-2">W 01/04</p>

      {/* Text: FEATURED */}
      <h2 className="text-lg font-bold uppercase mb-6 flex justify-between">FEATURED <span className=' font-thin'>(1)</span></h2>

      {/* Video */}
      <video 
        src="/videos/vid1.mp4" 
        autoPlay
        loop
        muted
        className="w-full"
      />
    </div>
  );
}
