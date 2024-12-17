import React from 'react';
import { motion } from 'framer-motion';

const HoverRevealButton1 = () => {
  return (
    <div className='text-center py-20 '>
      <motion.button
        className="relative py-2 px-4 rounded-xl shadow-lg border border-white backdrop-filter backdrop-blur-lg bg-opacity-10 border-opacity-50 overflow-hidden"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Background animation gradient */}
        <span
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'radial-gradient(circle, rgba(0,128,128,0.8) 0%, rgba(32,201,151,0.5) 50%, rgba(0,128,128,0.8) 100%)',
            opacity: '0.9'
          }}
        ></span>

        {/* Reveal animation overlay */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-white z-10"
          style={{
            transform: 'rotate(90deg)',
            transformOrigin: 'bottom left',
            width: '200%',
            height: '200%',
          }}
          variants={{
            rest: { x: '-105%', opacity: 1 },
            hover: { x: '100%', opacity: 1 },
          }}
          transition={{ duration: 0.9 }}
        />
      </motion.button>
    </div>
  );
};

export default HoverRevealButton1;
