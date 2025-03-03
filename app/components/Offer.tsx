import React from "react";

const WhatWeDo = () => {
  const itemsRow1 = [
    "UI/UX Design",
    "Collaboration",
    "Quality Assurance",
    "Agile/Scrum",
    "Creativity and Innovation",
  ];

  const itemsRow2 = [
    "Leadership and Management",
    "Conversation Design",
    "Competitive Analysis",
  ];

  return (
    <div className="relative pt-40 pb-40 flex flex-col items-center justify-center text-white p-6">
      <div className="absolute inset-2 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <h1 className="text-lg uppercase font-bold font-is mb-6">What we do</h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl w-full text-xs">
        {itemsRow1.map((item, index) => (
          <div
            key={index}
            className="border border-white text-white px-6 py-3 rounded-full text-center"
            style={{ borderRadius: "200px", borderWidth: "1px" }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-xs max-w-2xl w-full mt-4">
        {itemsRow2.map((item, index) => (
          <div
            key={index}
            className="border border-white text-white px-6 py-3 rounded-full text-center"
            style={{ borderRadius: "200px", borderWidth: "1px" }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
