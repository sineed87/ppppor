import React, { useState } from 'react';
import { Button } from './buttonanim/button';
import { motion } from 'framer-motion'; // Import Framer Motion
import { Check } from 'lucide-react'; // Import the check icon from Lucid (assuming it's installed)

const Pricing = () => {
    const [selectedPackage, setSelectedPackage] = useState<string>('Custom Package'); // Default selection

    // Function to handle click and update the selected package
    const handleClick = (packageName: string): void => {
        setSelectedPackage(packageName);
    };

    // Conditional content for the right side based on selected package
    const renderContent = () => {
        switch (selectedPackage) {
            case 'Custom Package':
                return (
                    <>
                        <h1 className="text-4xl font-bold text-white">Custom Package</h1> {/* Larger heading */}
                        <p className="mt-4 text-lg text-white leading-relaxed">
                            Tailored specifically for your needs. We’ll design a custom package that fits your project and goals.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-white">Included Services:</h3>
                            <div className="mt-4">
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Logo design
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> UI/UX
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Custom Development
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Animation
                                </p>
                            </div>
                        </div>
                    </>
                );
            case 'Design & Animation':
                return (
                    <>
                        <h1 className="text-4xl font-bold text-white">Design & Animation</h1>
                        <p className="mt-4 text-lg text-white leading-relaxed">
                            A complete package for businesses looking to make a visual impact with design and animation services.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-white">Included Services:</h3>
                            <div className="mt-4">
                                <p className="flex items-center text-white">
                                    <Check className="mr-2" /> 2D/3D Animation
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Logo Design
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className="mr-2" /> Video Editing
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Motion Graphics
                                </p>
                            </div>
                        </div>
                    </>
                );
            case 'Design & Development':
                return (
                    <>
                        <h1 className="text-4xl font-bold text-white">Design & Development</h1>
                        <p className="mt-4 text-lg text-white leading-relaxed">
                            Comprehensive design and development services to create exceptional websites and applications.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-white">Included Services:</h3>
                            <div className="mt-4">
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> UI/UX Design
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Web Development
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Mobile App Design
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Custom Development
                                </p>
                            </div>
                        </div>
                    </>
                );
            case 'Design & Marketing':
                return (
                    <>
                        <h1 className="text-4xl font-bold text-white">Design & Marketing</h1>
                        <p className="mt-4 text-lg text-white leading-relaxed">
                            A perfect blend of creative design and targeted marketing strategies to boost your brand.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-white">Included Services:</h3>
                            <div className="mt-4">
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Branding
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Social Media Design
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className="mr-2" /> Marketing Strategy
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> SEO
                                </p>
                            </div>
                        </div>
                    </>
                );
            case 'Super Package':
                return (
                    <>
                        <h1 className="text-4xl font-bold text-white">Super Package</h1>
                        <p className="mt-4 text-lg text-white leading-relaxed">
                            The ultimate package for those who need everything, including design, development, and marketing services.
                        </p>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-white">Included Services:</h3>
                            <div className="mt-4">
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Everything from all the packages
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Priority Support
                                </p>
                                <p className="flex items-center text-white">
                                    <Check className=" mr-2" /> Personalized Consultation
                                </p>
                                <p className="flex items-center text-white">
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
        <div className="text-white pt-20 pl-20">
            <div className="flex">
                {/* Left Sidebar */}
                <div className="w-1/4 text-white p-6">
                    <h2 className="text-6xl font-normal pb-20">Pricing</h2> {/* Larger sidebar heading */}
                    <ul className="mt-4">
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

                    <h1 className="flex mt-[8rem] font-semibold text-xl">
                        Your brand deserves the best.
                        Work with us and see the difference.
                    </h1>
                </div>

                {/* Right Main Content with Framer Motion */}
                <div className="w-3/4 p-6 pl-40 pt-40">
                    {/* Wrap the content with motion.div to apply animations */}
                    <motion.div
                        key={selectedPackage} // Ensure it re-renders when the selected package changes
                        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }} // Start with content fully hidden
                        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }} // Reveal the content (mask removed)
                        exit={{ clipPath: 'inset(0% 0% 100% 0%)' }} // Mask the content back up
                        transition={{ duration: 0.5, ease: 'easeOut' }} // Faster animation duration (0.5s)
                    >
                        {renderContent()}
                    </motion.div>

                    <Button variant="gooeyRight" className="mt-6 px-8 py-3 bg-[#EE656C] text-white font-normal font-is rounded-full text-xs">
                        Contact
                    </Button> {/* Larger button */}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
