import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter, faBehance } from "@fortawesome/free-brands-svg-icons";
import { Button } from './buttonanim/button';

import { ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <nav className=" top-0 z-50 pl-10 pr-10 pt-1 w-full"> {/* Sticky with top: 0 */}
            <div className="w-full  py-3 flex justify-between items-center   mt-2">
                <div className="text-xl font-bold  text-white flex items-center gap-2">



                    <h1 className="text-xs text-[#f2ecff]   font-is">Ignition Works</h1>
                    <div className="space-x-2 ml-2  flex text-white items-center">
                        <a href="https://t.me/+o5EOOH5TNI0zMzM0" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} className="text-lg" />
                        </a>
                        <a href="https://x.com/justblazeey" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="text-lg" />
                        </a>
                        <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faBehance} className="text-lg" />
                        </a>
                    </div>
                </div>
                <ul className="flex  text-white font-is text-xs md:inline-block">
                    <div className="flex  text-white font-is">
                        <Button className="text-[#c4c3c3] text-sm" variant="linkHover2">Home</Button>
                        <Button
                            className="text-white text-sm"
                            variant="linkHover2"
                            onClick={() => document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Studio
                        </Button>
                        <Button onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })} className="text-white text-sm" variant="linkHover2">Cases</Button>
                        <Button onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })} className="text-white text-sm" variant="linkHover2">Blog</Button>
                        <Button onClick={() => document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' })} className="text-white text-sm" variant="linkHover2">Prices</Button>

                    </div>
                </ul>
                <div className="flex items-center gap-2">

                    <Button className="flex items-center gap-2 font-is text-xs rounded-full p-2 pr-4 pl-4" variant="gooeyRight">

                        <h1 className='flex items-center gap-1' >Let's talk <ArrowUpRight size={15} /></h1>
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
