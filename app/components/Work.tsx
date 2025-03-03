import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './buttonanim/button';
import { ChevronRight } from 'lucide-react';

const OurWork: React.FC = () => {
    const slides = [
        {
            title: 'InkSpire+',
            description: 'A creative storytelling platform that merges technology with artistic expression.',
            mainImage: '/images/a515.png',
            title1: "/website/"
        },
        {
            title: 'Indigo+',
            description: 'A dynamic branding initiative that redefines visual identity and engagement.',
            mainImage: '/images/b1.png',
            title1: "/app/"
        },
    ];

    const ecommerceSlide = {
        title: 'ShopSphere+',
        description: 'An innovative eCommerce platform designed for seamless shopping experiences.',
        mainImage: '/images/ecomm.png',
        title1: "/ecommerce/"
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-2 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 mt-20 mb-20 w-full">
                <div className="w-full border-t border-white mb-4" />
                <div>
                    <p className="text-sm mb-2">W 02/04</p>
                    {/* Text: FEATURED */}
                    <h2 className="text-lg flex justify-between font-bold uppercase mb-6">WORK <span className='font-thin'>(2)</span></h2>
                </div>
                {/* Images Section */}
                <div className="flex justify-between gap-4">
                    {slides.map((slide, index) => (
                        <div key={index} className="w-1/2">
                            {/* Image */}
                            <motion.img
                                src={slide.mainImage}
                                alt={slide.title}
                                className="h-[500px] w-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            />

                            {/* Title & Description */}
                            <div className="mt-4">
                                <p className="text-white text-xs mb-1">{slide.title1}</p>
                                <h2 className="text-white text-5xl font-black uppercase">{slide.title}</h2>
                                <p className="text-gray-300 text-sm mt-1">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ECOMMERCE Section */}
                <div className="mt-16">
                    <h2 className="text-lg flex justify-between font-bold uppercase mb-6">ECOMMERCE</h2>
                    <div className="w-full ">
                        <motion.img
                            src={ecommerceSlide.mainImage}
                            alt={ecommerceSlide.title}
                            className="h-[500px] w-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />

                        <div className="mt-4">
                            <p className="text-white text-xs mb-1">{ecommerceSlide.title1}</p>
                            <h2 className="text-white text-5xl font-black uppercase">{ecommerceSlide.title}</h2>
                            <p className="text-gray-300 text-sm mt-1">{ecommerceSlide.description}</p>
                        </div>
                    </div>
                </div>

                {/* Centered Button */}
                <div className="mt-20 flex justify-center">
                    <Button className="flex items-center font-sm gap-2 border rounded-full p-2 pr-2 pl-4" variant="gooeyRight">
                        <h1 className='flex items-center'>explore all <ChevronRight /></h1>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OurWork;
