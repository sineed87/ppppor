import React from 'react';
import { Button } from "./buttonanim/button";
import { ArrowUpRight, CircleChevronRight } from 'lucide-react';

const OurWork: React.FC = () => {
    return (
        <div className="mt-[100px] p-20 transition-all duration-300">
            <div className="flex flex-col pl-10">
                <div className="pb-20">
                    <h1 className="text-sm mb-4 flex font-hel text-[#EE656C]">[CASES]</h1>
                    <div className="flex items-center justify-between">
                        <h1 className="text-6xl font-hel tracking-widest font-normal flex items-center">
                            Our Work <ArrowUpRight strokeWidth={1} size={64} />
                        </h1>
                        <div className="pr-4">
                            <Button
                                variant="linkHover2"
                                className="text-white border rounded-[80px] text-xs flex items-center gap-2"
                            >
                                VIEW ALL <CircleChevronRight size={14} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal Gallery */}
            <div className="flex">
                {[
                    {
                        image: "/images/a4.png",
                        title: "InkSpire Studio",
                        description:
                            "The campaign 'Anoniem, niet alleen' sheds light on the critical, low-threshold, and anonymous support the organization offers to women facing unplanned pregnancies.",
                    },
                    {
                        image: "/images/a7.png",
                        title: "Ontdek Hospitality",
                        description:
                            "Not Your Average Job’ is a multi-asset awareness and perception campaign that showcases the dynamics of working in the hospitality industry.",
                    },
                    {
                        image: "/images/a91.png",
                        title: "Feed Cheester",
                        description:
                            "For the owned social channels of Lidl we created 250+ videos bursting with energy and humor, spreading the brand's promise both organically and through paid campaigns across the entire .",
                    },
                ].map((item, index) => (
                    <div key={index} className="flex-shrink-0 mr-4 last:mr-0 pl-10">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-[464px] h-[263px] border rounded-lg transition-all duration-100"
                        />
                        <h1 className="text-4xl font-dm uppercase mt-4">{item.title}</h1>
                        <p className="text-sm text-left mt-2 max-w-[350px]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurWork;
