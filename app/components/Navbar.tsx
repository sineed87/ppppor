import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './buttonanim/button';

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between bg-[#121212] p-8 font-is font-medium">
      {/* Left side with 4 words and centered circles */}
      <div className="flex gap-6 text-white mt-8 border">
        <div className="relative flex items-center">
          {/* Motion Circle */}
          <motion.div
            className="absolute w-[10px] h-[10px] bg-white rounded-full"
            whileHover={{ scale: 1.5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <Button className='text-white ' variant="linkHover2">Home</Button>
        </div>
        <div className="relative flex items-center">
          <motion.div
            className="absolute w-[10px] h-[10px] bg-white rounded-full"
            whileHover={{ scale: 1.5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <Button className='text-white' variant="linkHover2">Studio</Button>
        </div>
        <div className="relative flex items-center">
          <motion.div
            className="absolute w-[10px] h-[10px] bg-white rounded-full"
            whileHover={{ scale: 1.5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <Button className='text-white' variant="linkHover2">Cases</Button>
        </div>
        <div className="relative flex items-center">
          {/* Empty div */}
        </div>
      </div>

      {/* Centered SVG */}
     

      {/* Right side with 3 words and centered circles */}
      <div className="flex gap-6 text-white">
        <div className="relative flex items-center">
          <motion.div
            className="absolute w-[10px] h-[10px] bg-white rounded-full"
            whileHover={{ scale: 1.5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <Button className='text-white ' variant="linkHover2">Blog</Button>
        </div>
        <div className="relative flex items-center">
          <motion.div
            className="absolute w-[10px] h-[10px] bg-white rounded-full"
            whileHover={{ scale: 1.5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <Button className='text-white' variant="linkHover2">Prices</Button>
        </div>
        <div className="relative flex items-center">
          <motion.div
            className="absolute w-[10px] h-[10px] bg-white rounded-full"
            whileHover={{ scale: 1.5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <Button className='text-white' variant="linkHover2">Contact</Button>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
