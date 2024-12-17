import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter, faBehance } from "@fortawesome/free-brands-svg-icons";
import { Button } from './buttonanim/button';

const Navbar: React.FC = () => {
    return (


        <nav className="sticky top-0 z-50 p-2 " >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center border rounded-[80px] bg-[#121212] bg-opacity-50 backdrop-blur-md mt-2">
                <div className="text-xl font-bold pl-4 text-white flex items-center gap-2">
                    <svg
                        className="w-[30px] "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 480 480"
                        fill="#FFFFFF"
                    >
                        <path d="M480 210H352l110.9-64-30-52L322 158l64-110.8-52-30L270 128V0h-60v128L146 17.2l-52 30L158 158 47.2 94l-30 52L128 210H0v60h128L17.2 334l30 52L158 322 94 432.9l52 30L210 352v128h60V352l64 110.9 52-30L322 322l110.9 64 30-52L352 270h128v-60z"></path>
                    </svg>
                    <h1 className='text-2xl  font-is'>SPIREWAVE</h1>


                </div>
                <ul className="flex space-x-10 text-white font-is text-xs ">
                    <div className="flex gap-6 text-white font-is">
                        <Button className="text-white text-xs" variant="linkHover2">Home</Button>
                        <Button className="text-white text-xs" variant="linkHover2">Studio</Button>
                        <Button className="text-white text-xs" variant="linkHover2">Cases</Button>
                        <Button className="text-white text-xs" variant="linkHover2">Blog</Button>
                        <Button className="text-white text-xs" variant="linkHover2">Prices</Button>
                    </div>
                </ul>
                <div className='flex items-center gap-2'>
                    <Button className="bg-[#222222] font-is text-[#EE656C] hover:text-white hover:scale-110 duration-200 rounded-[80px]" variant="gooeyRight">Contact</Button>
                    <div className="space-x-2 mr-4 mt-1 flex text-white  items-center">
                        <a href="https://t.me/+o5EOOH5TNI0zMzM0" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} className="text-lg" />
                        </a>
                        <a href="https://x.com/justblazeey" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="text-lg" />
                        </a>
                        <a href="https://t.me/+o5EOOH5TNI0zMzM0" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faBehance} className="text-lg" />
                        </a>

                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
