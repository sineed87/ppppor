import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronsDown } from 'lucide-react'; // Import Lucide ChevronsDown icon
import FlipLink from './RevealLinks2'; // Adjust the path as necessary

gsap.registerPlugin(ScrollTrigger);

const Header3 = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const studioRef = useRef<HTMLHeadingElement>(null); // Ref for the word "PROJECTS"
    const aboutRef = useRef<HTMLHeadingElement>(null); // Ref for "ABOUT"
    const contactRef = useRef<HTMLHeadingElement>(null); // Ref for "CONTACT"
    const telegramRef = useRef<HTMLHeadingElement>(null); // Ref for "TELEGRAM"
    const scrollTextRef = useRef<HTMLDivElement>(null); // Ref for "Scroll Down" text

    useEffect(() => {
        const textElement = textRef.current;
        const scrollTextElement = scrollTextRef.current;

        // GSAP animation for skewing text during scroll
        if (textElement) {
            gsap.to(textElement, {
                skewY: 5, // Apply skew effect
                ease: "power1.out",
                scrollTrigger: {
                    trigger: textElement,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1, // Smooth animation while scrolling
                },
            });
        }

        // Function to apply hover effect for moving text left only
        const applyHoverEffect = (element: HTMLElement | null) => {
            if (element) {
                gsap.set(element, { color: '#000000', textShadow: 'none', x: 0 }); // Initial state
                element.addEventListener('mouseenter', () => {
                    gsap.to(element, {
                        x: -10, // Move text 10px to the left
                        duration: 0.3,
                        ease: 'power1.out',
                    });
                });
                element.addEventListener('mouseleave', () => {
                    gsap.to(element, {
                        x: 0, // Move text back to original position
                        duration: 0.3,
                        ease: 'power1.out',
                    });
                });
            }
        };

        // Apply hover effect to all text elements
        applyHoverEffect(studioRef.current);
        applyHoverEffect(aboutRef.current);
        applyHoverEffect(contactRef.current);
        applyHoverEffect(telegramRef.current);

        // GSAP effect for continuous white-to-gray color gradient animation
        if (scrollTextElement) {
            gsap.to(scrollTextElement, {
                backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, #A0A0A0 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                duration: 2,
                ease: 'power1.inOut',
                repeat: -1, // Loop the animation indefinitely
                yoyo: true, // Reverse the animation back and forth
            });
        }

        // Scale effect for links on scroll
        if (textElement) {
            gsap.fromTo(textElement, 
                { scale: 1.4 }, // Initial scale
                {
                    scale: 1.0, // Scale down
                    scrollTrigger: {
                        trigger: textElement,
                        start: "top center",
                        end: "bottom center",
                        scrub: 2, // Smooth animation while scrolling
                    },
                }
            );
        }
    }, []);

    return (
        <header style={{ backgroundColor: '#4801FF' }} className="text-black h-screen relative overflow-hidden">
            {/* Social links moved to top-left corner */}
            <div className="absolute text-white uppercase font-work font-bold text-lg">
                <div className="flex p-10 space-x-10">
                    <FlipLink href="#">03&nbsp;Twitter </FlipLink>
                    <FlipLink href="#">04&nbsp; Instagram</FlipLink>
                    <FlipLink href="#">05&nbsp;LinkedIn</FlipLink>
                </div>
                <div className="absolute h-72 w-120 pl-10 mt-40 ">
                    <video
                        src="/videos/img1.mp4"  // Video path from public folder
                        autoPlay
                        muted
                        loop
                        className="w-120 h-72 object-cover"
                    />
                </div>
            </div>

            {/* Bottom-left section with logo and info */}
            <div className="absolute bottom-0 left-0 p-10">
                <div className="mb-20 text-white font-black ">
                    <h1 className="text-5xl">LINEAR</h1>
                    <h1 className="text-5xl">DESIGN CO.</h1>
                </div>
                <div className='flex text-white text-sm space-x-10'>
                    <div>
                        <p className="">Studio of Eric Van Holtz</p>
                        <p className="">Web Developer</p>
                    </div>
                    <div>
                        <p className="mb-2">Portland, Oregon</p>
                        <p className="mb-2">hello@vanholtz.co</p>
                    </div>
                    <div>
                        <p>01 about</p>
                        <p>02 journal</p>
                    </div>
                </div>
            </div>

            {/* Right-side with large text */}
            <div ref={textRef} className="absolute right-0 top-1/4 pr-10 transform text-right leading-none font-black -translate-y-1/4">
                {/* PROJECTS link */}
                <a href="/projects">
                    <h1 ref={studioRef} className="text-[10vw] flex font-black tracking-tight uppercase cursor-pointer">
                        <div className='flex text-[4vw] font-bold'></div>
                        PROJECTS
                    </h1>
                </a>
                
                {/* ABOUT link */}
                <a href="/about">
                    <h1 ref={aboutRef} className="text-[10vw] tracking-tight uppercase cursor-pointer">
                        ABOUT
                    </h1>
                </a>

                {/* CONTACT link */}
                <a href="/contact">
                    <h1 ref={contactRef} className="text-[10vw] tracking-tight uppercase cursor-pointer">
                       CONTACT
                    </h1>
                </a>

                {/* TELEGRAM link */}
                <a href="/telegram">
                    <h1 ref={telegramRef} className="text-[10vw] tracking-tight uppercase cursor-pointer">
                        TELEGRAM
                    </h1>
                </a>
            </div>

            {/* Scroll Down Text with Lucide Arrow and GSAP Color Effect */}
            <div 
                ref={scrollTextRef}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center text-sm"
            >
                <span>Scroll Down</span>
                <ChevronsDown size={16} className="animate-bounce mb-1" />
            </div>
        </header>
    );
};

export default Header3;
