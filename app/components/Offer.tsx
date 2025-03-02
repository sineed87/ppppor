export default function Home() {
  return (
    <div id="studio" className="pt-40 pb-40">
      <h1 
        className="text-sm pl-80 uppercase tracking-widest mb-20 bg-clip-text text-transparent"
        style={{
          backgroundImage: 'linear-gradient(to right top, #ee656c, #e883bf, #beadf4, #9ccfff, #ade7f5)',
        }}
      >
        [What we do]
      </h1>

      <div className="flex flex-col w-full font-black font-is text-[#ADE7F5]">
        {['3D', 'VISUAL', 'MOTION', 'PRODUCT', 'CRYPTO', 'EVENTS'].map((item, index) => (
          <div
            key={index}
            className="relative group border-t border-gray-700 cursor-pointer"
          >
            <h1 className="text-9xl pl-80 z-10 relative">{item}</h1>
            <div className="absolute inset-0 bg-[#EE656C] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center z-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
