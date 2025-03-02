// Footer.tsx
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#121212] text-white py-16 px-4 pl-10 pr-10 font-is">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="mb-10 md:mb-0">
                    <h3 className="text-lg mb-4">SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <div className="flex flex-col space-y-4">
                        <input
                            type="email"
                            placeholder="Enter E-mail Address"
                            className="px-4 py-2 w-full md:w-[350px] bg-transparent border rounded-[80px] text-white"
                        />
                        <button  className="px-6 py-2 bg-white w-full md:w-[350px] text-sm rounded-[80px] font-dm text-black hover:bg-gray-300 transition-colors">
                            SUBMIT
                        </button>
                    </div>
                    <button className="px-6 py-2 mt-8 md:mt-20 bg-transparent rounded-[80px] text-sm font-dm font-extralight w-full md:w-[350px] text-white border hover:bg-gray-300 transition-colors">
                        BACK TO TOP
                    </button>
                </div>

                <div className="flex flex-col md:flex-row md:ml-16 mb-10 text-xs w-full pb-10">
                    {/* Discover Links */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xs font-bold mb-4">DISCOVER</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Portfolio</a></li>
                            <li><a href="#" className="hover:text-gray-400">Our Process</a></li>
                            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
                            <li><a href="#" className="hover:text-gray-400">Case Studies</a></li>
                            <li><a href="#" className="hover:text-gray-400">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Web Design Services Links */}
                    <div className="flex w-full md:w-2/3">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <h3 className="text-xs font-bold mb-4">WEB DESIGN SERVICES</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-gray-400">UI/UX Design</a></li>
                                <li><a href="#" className="hover:text-gray-400">E-commerce Design</a></li>
                                <li><a href="#" className="hover:text-gray-400">Landing Pages</a></li>
                                <li><a href="#" className="hover:text-gray-400">Website Redesign</a></li>
                                <li><a href="#" className="hover:text-gray-400">Wireframing</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xs font-bold mb-4 text-transparent">WEB DESIGN SERVICES</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-gray-400">Responsive Design</a></li>
                                <li><a href="#" className="hover:text-gray-400">Custom Themes</a></li>
                                <li><a href="#" className="hover:text-gray-400">Prototyping</a></li>
                                <li><a href="#" className="hover:text-gray-400">SEO Optimization</a></li>
                                <li><a href="#" className="hover:text-gray-400">Content Strategy</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Connect Links */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 pb-20">
                        <h3 className="text-xs font-bold mb-4">CONNECT</h3>
                        <ul className="space-y-2">
                            <li><a href="mailto:info@webdesignstudio.com" className="hover:text-gray-400">info@webdesignstudio.com</a></li>
                            <li><a href="mailto:careers@webdesignstudio.com" className="hover:text-gray-400">careers@webdesignstudio.com</a></li>
                            <li><a href="https://www.instagram.com" target="_blank" className="hover:text-gray-400 flex items-center"> <ArrowUpRight size={16} />Instagram </a></li>
                            <li><a href="https://www.youtube.com" target="_blank" className="hover:text-gray-400 flex items-center"> <ArrowUpRight size={16} />YouTube</a></li>
                            <li><a href="https://www.linkedin.com" target="_blank" className="hover:text-gray-400 flex items-center"> <ArrowUpRight size={16} />LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Disclaimer */}
            </div>

            <div className="border-t border-gray-600 text-sm text-white pt-10">
                <div className="flex justify-between pt-4 text-xs flex-col md:flex-row">
                    <p>© 2024 WEB DESIGN STUDIO. ALL RIGHTS RESERVED.</p>
                    <p className="">
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a> |
                        <a href="#" className="hover:text-gray-300"> Terms of Use</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
