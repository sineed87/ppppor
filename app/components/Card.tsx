"use client";

import { motion } from "framer-motion";
import React from "react";

// Define the type for the Card component's props
interface CardProps {
  bgColor: string;
  price: string;
  plan: string;
  buttonText: string;
}

// Main SquishyCard component that contains three centered cards
const SquishyCard: React.FC = () => {
  return (
    <section className=" px-4 py-12 flex justify-center">
      <div className="flex space-x-8">
        <Card bgColor="#3D5AFE" price="$299" plan="Individual" buttonText="SIGN UP" />
        <Card bgColor="#7A5FFF" price="$999" plan="Company" buttonText="SIGN UP" />
        <Card bgColor="#FF66C4" price="$4,999" plan="Enterprise" buttonText="BOOK A CALL" />
      </div>
    </section>
  );
};

// Card component with a dynamic background color
const Card: React.FC<CardProps> = ({ bgColor, price, plan, buttonText }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      style={{ backgroundColor: bgColor }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          {plan}
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          {price}/
          <br />
          Month
        </motion.span>
        <p className="mt-2">
          {plan === "Individual"
            ? "For individuals who want to understand why their landing pages aren’t working"
            : plan === "Company"
            ? "For mid-sized companies serious about boosting their revenue by 30%"
            : "For large enterprises looking to outsource their conversion rate optimization"}
        </p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        {buttonText}
      </button>
      <Background plan={plan} />
    </motion.div>
  );
};

// Background component with different SVG shapes based on the card plan
interface BackgroundProps {
  plan: string;
}

const Background: React.FC<BackgroundProps> = ({ plan }) => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.4,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      {/* Primary shape based on the plan */}
      {plan === "Individual" && (
        <motion.circle
          cx="160"
          cy="192"
          r="80"
          fill="#262626"
          variants={{
            hover: {
              scale: 1.2,
              y: -10,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
        />
      )}
      {plan === "Company" && (
        <motion.rect
          x="100"
          y="112"
          width="120"
          height="120"
          fill="#262626"
          variants={{
            hover: {
              rotate: 15,
              y: -10,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
        />
      )}
      {plan === "Enterprise" && (
        <motion.polygon
          points="160,20 250,200 70,200"
          fill="#262626"
          variants={{
            hover: {
              rotate: 10,
              y: -10,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
          }}
        />
      )}

      {/* Secondary irregular polygon shape for all cards */}
      <motion.polygon
        points="80,300 240,340 200,260 140,220 60,250"
        fill="#262626"
        variants={{
          hover: {
            scale: 1.2,
            y: -15,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.4,
        }}
      />
    </motion.svg>
  );
};

export default SquishyCard;
