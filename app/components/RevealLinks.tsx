// app/components/RevealLinks.tsx
import React from 'react';
import { motion } from 'framer-motion';


const RevealLinks: React.FC = () => {
  const links = ["Twitter", "LinkedIn", "Facebook", "Instagram"];

  return (
    <section className="grid p-10 gap-2 bg-transparent text-left text-white">
      {links.map((link) => (
        <FlipLink key={link} href="#">
          {link}
        </FlipLink>
      ))}
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: React.ReactNode;
  href: string;
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  const splitChildren = (typeof children === "string") ? children.split("") : [];

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-2xl font-medium uppercase sm:text-7xl md:text-sm lg:text-sm"
      style={{ lineHeight: 0.75 }}
    >
      <div>
        {splitChildren.map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {splitChildren.map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      {/* Add the icon next to the link text */}
      
    </motion.a>
  );
};

export default RevealLinks; // Ensure this is a default export
