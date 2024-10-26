import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

export const VelocityText: React.FC = () => {
    const targetRef = useRef<HTMLElement | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(true);
    const [isOverHighlight, setIsOverHighlight] = useState(false); // State for hover effect

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -5000]);

    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    return (
        <section
            ref={targetRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="h-[1000vh] bg-neutral-50 text-neutral-950 relative cursor-none" // Hide default cursor
        >
            {/* Circular text following the cursor with color change on highlight hover */}
            {visible && (
                <motion.div
                    style={{
                        left: cursorPosition.x,
                        top: cursorPosition.y,
                        transform: "translate(-50%, -50%)",
                        zIndex: 50,
                    }}
                    className="fixed pointer-events-none"
                >
                    <motion.svg
                        width="150"
                        height="150"
                        viewBox="0 0 150 150"
                        className="relative"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 75, 75
                                   m -50, 0
                                   a 50,50 0 1,1 100,0
                                   a 50,50 0 1,1 -100,0"
                            />
                        </defs>
                        <text
                            fontSize="12"
                            fontWeight="bold"
                            fill={isOverHighlight ? "#fff" : "#333"} // Conditional color based on highlight
                        >
                            <textPath href="#circlePath" startOffset="0%">
                                Scroll Down Explore More Below • Scroll Down Explore More Below • Scroll Down Explore More Below
                            </textPath>
                        </text>
                    </motion.svg>
                </motion.div>
            )}

            {/* Main content */}
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="flex items-center">
                    <motion.p
                        style={{ x }}
                        className="origin-bottom-left text-8xl font-black uppercase mb-80"
                    >
                        <p
                            onMouseEnter={() => setIsOverHighlight(true)} // Set to true when hovering over text
                            onMouseLeave={() => setIsOverHighlight(false)} // Set to false when leaving text
                        >
                            Frontend Developer
                        </p>
                        <p
                            onMouseEnter={() => setIsOverHighlight(true)}
                            onMouseLeave={() => setIsOverHighlight(false)}
                        >
                            Web Integrator
                        </p>
                        <p
                            onMouseEnter={() => setIsOverHighlight(true)}
                            onMouseLeave={() => setIsOverHighlight(false)}
                        >
                            Creative Design
                        </p>
                    </motion.p>
                    <motion.img
                        src="/images/web.jpg"
                        alt="Image description"
                        style={{ x }}
                        className="my-4 ml-60 w-96 h-auto"
                        onMouseEnter={() => setIsOverHighlight(true)} // Set to true when hovering over image
                        onMouseLeave={() => setIsOverHighlight(false)} // Set to false when leaving image
                    />
                    <motion.div
                        style={{ x }}
                        className="p-5"
                        animate={{
                            opacity: [1, 0, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <ChevronRight />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VelocityText;
