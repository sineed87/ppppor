"use client";

import { Option } from 'lucide-react'; // Replace 'Option' with a valid icon, like Settings
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [showNavbar, setShowNavbar] = useState(true); // Track visibility of navbar
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full  flex font-manrope justify-between items-center ml-10 mr-10 p-10 text-white border-gray-300  transition-transform duration-500 ease-in-out ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo and Links */}
      <div className="flex items-center border bg-black border-black p-2">
        {/* Logo Section */}
        <span className="text-3xl font-extrabold flex items-center pl-2 pr-20">
          <Option size={32} strokeWidth={3} className="pr-2" /> LINEARDESIGN. {/* Using a valid icon like Settings */}
        </span>

        {/* Navigation Links */}
        <ul className="flex space-x-10 uppercase font-manrope bg-black font-bold text-sm pr-2">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Time and Location */}
      <div className="flex items-center mr-20 space-x-4 text-sm font-bold bg-black">
        <span>{currentTime}</span> {/* Live Time */}
        <span>EU/Madrid</span> {/* Location */}
      </div>
    </nav>
  );
};

export default Navbar;
