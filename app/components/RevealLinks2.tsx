import React from 'react';
import { motion } from 'framer-motion';

interface FlipLinkProps {
  children: React.ReactNode; // Allows any valid React node as a child
  href: string; // Link destination
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  const splitChildren = (typeof children === "string") ? children.split("") : [];

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden  whitespace-nowrap text-7xl font-medium uppercase sm:text-7xl md:text-3xl lg:text-base"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {splitChildren.map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.025 * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {splitChildren.map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.025 * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink; // Ensure this is a default export
