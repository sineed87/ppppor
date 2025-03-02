import React from "react";
import { motion } from "framer-motion";

const SectionTransition = () => {
  return (
    <div className="relative">
      {/* First Section */}
      <motion.section
        className="h-screen flex justify-center items-center bg-gray-100"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">First Section</h2>
          <p className="mt-4 text-lg text-gray-600">
            Scroll to the next section and experience the mask transition.
          </p>
        </div>
      </motion.section>

      {/* Second Section */}
      <motion.section
        className="h-screen flex justify-center items-center bg-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Second Section</h2>
          <p className="mt-4 text-lg text-gray-600">
            This is the next section, where we apply the SVG mask transition.
          </p>
        </div>
      </motion.section>

      {/* Masking SVG for transition */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <mask id="mask1" x="0" y="0" width="100" height="100">
            <motion.rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="white"
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </mask>
        </defs>
        <rect width="100" height="100" fill="black" mask="url(#mask1)" />
      </svg>
    </div>
  );
};

export default SectionTransition;
