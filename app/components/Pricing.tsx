import React, { useState } from 'react';
import { Button } from './buttonanim/button';
import { motion } from 'framer-motion'; // Import Framer Motion
import { Check } from 'lucide-react'; // Import the check icon from Lucid (assuming it's installed)

const Pricing = () => {
    const [selectedPackage, setSelectedPackage] = useState<string>('Custom Package'); // Default selection

    const handleClick = (packageName: string): void => {
        setSelectedPackage(packageName);
    };

    const renderContent = () => {
        switch (selectedPackage) {
            case 'Custom Package':
                return (
                    <>
                        <h1 className="text-4xl font-bold text-black">Custom Package</h1> {/* Larger heading */}
                        <p className="mt-4 text-lg text-black leading-relaxed">
                            Tailored specifically for your needs. We’ll design a custom package that fits your project and goals.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-black">Included Services:</h3>
                            <div className="mt-4">
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Logo design
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> UI/UX
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Custom Development
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Animation
                                </p>
                            </div>
                        </div>
                    </>
                );
            case 'Design & Animation':
                return (
                    <>
                        <h1 className="text-4xl font-bold text-black">Design & Animation</h1>
                        <p className="mt-4 text-lg text-black leading-relaxed">
                            A complete package for businesses looking to make a visual impact with design and animation services.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-black">Included Services:</h3>
                            <div className="mt-4">
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> 2D/3D Animation
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Logo Design
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Video Editing
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Motion Graphics
                                </p>
                            </div>
                        </div>
                    </>
                );
            case 'Design & Development':
                return (
                    <>
                        <h1 className="text-4xl font-bold text-black">Design & Development</h1>
                        <p className="mt-4 text-lg text-black leading-relaxed">
                            Comprehensive design and development services to create exceptional websites and applications.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-black">Included Services:</h3>
                            <div className="mt-4">
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> UI/UX Design
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Web Development
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Mobile App Design
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Custom Development
                                </p>
                            </div>
                        </div>
                    </>
                );
            case 'Design & Marketing':
                return (
                    <>
                        <h1 className="text-4xl font-bold text-black">Design & Marketing</h1>
                        <p className="mt-4 text-lg text-black leading-relaxed">
                            A perfect blend of creative design and targeted marketing strategies to boost your brand.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-black">Included Services:</h3>
                            <div className="mt-4">
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Branding
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Social Media Design
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Marketing Strategy
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> SEO
                                </p>
                            </div>
                        </div>
                    </>
                );
            case 'Super Package':
                return (
                    <>
                        <h1 className="text-4xl font-bold text-black">Super Package</h1>
                        <p className="mt-4 text-lg text-black leading-relaxed">
                            The ultimate package for those who need everything, including design, development, and marketing services.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-black">Included Services:</h3>
                            <div className="mt-4">
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Everything from all the packages
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Priority Support
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Personalized Consultation
                                </p>
                                <p className="flex items-center text-black">
                                    <Check className="mr-2" /> Exclusive Marketing Campaigns
                                </p>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div id="prices" className="text-black bg-white rounded-[30px] pt-10 pl-20 sm:pl-6 md:pl-10">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 p-6">
                    <h2 className="text-4xl md:text-6xl  font-dm font-black pb-10 md:pb-20">Pricing</h2>
                    <ul className="mt-4 font-bold ">
                        <li
                            className="py-3 text-lg border-b border-gray-400 cursor-pointer hover:text-red-500"
                            onClick={() => handleClick('Custom Package')}
                        >
                            Custom Package
                        </li>
                        <li
                            className="py-3 text-lg border-b border-gray-400 cursor-pointer hover:text-red-500"
                            onClick={() => handleClick('Design & Animation')}
                        >
                            Design & Animation
                        </li>
                        <li
                            className="py-3 text-lg border-b border-gray-400 cursor-pointer hover:text-red-500"
                            onClick={() => handleClick('Design & Development')}
                        >
                            Design & Development
                        </li>
                        <li
                            className="py-3 text-lg border-b border-gray-400 cursor-pointer hover:text-red-500"
                            onClick={() => handleClick('Design & Marketing')}
                        >
                            Design & Marketing
                        </li>
                        <li
                            className="py-3 text-lg cursor-pointer hover:text-red-500"
                            onClick={() => handleClick('Super Package')}
                        >
                            Super Package
                        </li>
                    </ul>

                    <h1 className="flex mt-16 md:mt-[8rem] font-semibold text-xl">
                        Your brand deserves the best.
                        Work with us and see the difference.
                    </h1>
                </div>

                <div className="w-full md:w-3/4 p-6 md:pl-40 md:pt-40">
                    <motion.div
                        key={selectedPackage}
                        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                        exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        {renderContent()}
                    </motion.div>

                    <Button variant="gooeyRight" className="mt-6 px-8 py-3 bg-[#121212] text-white font-normal font-is rounded-full text-xs">
                        Contact
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
