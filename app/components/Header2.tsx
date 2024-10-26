import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SquareArrowOutUpRight } from 'lucide-react';
import FlipLink from './RevealLinks3';
import FlipLink1 from './RevealLinks4';

const Header2 = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null); // Ref for the main text element
    const projectRef = useRef(null); // Ref for the PROJECT text element

    useEffect(() => {
        // GSAP animation for spinning the image
        gsap.to(imageRef.current, {
            rotation: 360,
            duration: 5,
            repeat: -1, // Infinite loop
            ease: 'linear' // Smooth linear animation
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Slide in the main text from the left when it comes into view
                    gsap.fromTo(textRef.current,
                        {
                            x: -100, // Start from 100px to the left
                            opacity: 0 // Start from invisible
                        },
                        {
                            x: 0, // Move to its original position
                            opacity: 1, // Fade in to visible
                            duration: 1, // Duration of the animation
                            ease: 'power2.out' // Easing function
                        }
                    );

                    // Slide in the PROJECT text from the left when it comes into view
                    gsap.fromTo(projectRef.current,
                        {
                            x: -100, // Start from 100px to the left
                            opacity: 0 // Start from invisible
                        },
                        {
                            x: 0, // Move to its original position
                            opacity: 1, // Fade in to visible
                            duration: 1, // Duration of the animation
                            ease: 'power2.out' // Easing function
                        }
                    );

                    // Unobserve after the animation to prevent it from triggering again
                    observer.unobserve(entry.target);
                }
            });
        });

        // Start observing the textRef
        if (textRef.current) {
            observer.observe(textRef.current);
        }

        // Cleanup function
        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <header className="flex flex-row justify-between h-full mt-[5vw] text-black p-10 bg-[#4801FF]">
            {/* Text Section */}
            <div className="text-white  text-left">
                <div className='flex justify-between'>
                    <div className='w-2/3 flex'>
                        <div className='bg-white p-3 mr-5 mt-6 items-center w-2 h-2'></div>
                        <p className="mt-4 text-5xl uppercase " ref={textRef}>
                        From landing pages to full-scale websites and mobile apps, I specialize in creating digital experiences that bring your vision to life. Combining technical expertise with a unique creative approach, I focus on crafting showcases that resonate with your audience and elevate your brand.
                        </p>
                    </div>

                    <div className=" mt-4">
                        <FlipLink href="#">03&nbsp;landing&nbsp; pages </FlipLink>
                        <FlipLink href="#">04&nbsp; branding</FlipLink>
                        <FlipLink href="#">05&nbsp;ui-ux</FlipLink>
                    </div>
                </div>
                <div className='flex mt-40 w-1/3'>
                    <div className='bg-white p-3 mr-5 mt-7 items-center w-2 h-2'></div>
                    <p className="mt-4 text-3xl uppercase" ref={textRef}>
                    Every project begins with an in-depth understanding of your goals, audience, and brand personality. By tailoring every element to your unique story, I ensure the final product not only looks stunning but also performs seamlessly, maximizing engagement and delivering real results.


                    </p>
                </div>
                <div className='flex justify-between  mt-60'>
                    <div className="text-lg mt-6 ">
                        <FlipLink1 href="#">06&nbsp;Services </FlipLink1>
                        <FlipLink1 href="#">07&nbsp; Functionality</FlipLink1>
                        <FlipLink1 href="#">08&nbsp;Design</FlipLink1>
                    </div>
                    <div className='w-2/3 '>
                        <div className='flex '>
                            <div className='bg-white p-2 mr-5 mt-6 items-center w-2 h-2'></div>
                            <div>
                                <p className="mt-4 text-5xl uppercase" ref={textRef}>
                                With a specialized focus on landing pages, websites, and mobile applications, I transform your concepts into fully realized digital showcases. My technical skills and creative insight aim to capture the essence of your brand, creating memorable and effective audience interactions.
                                </p>

                            </div>
                        </div>
                        <div className='flex mt-10'>
                            <div className='bg-white p-2 mr-5 mt-6 items-center w-2 h-2'></div>
                            <div>
                                <p className="mt-4 text-2xl w-2/3 uppercase" ref={textRef}>
                                I believe in a collaborative process that centers around your vision and goals. From design through development, I work closely with you to shape every detail, ensuring that the finished product aligns perfectly with your brand values and engages your target market effectively.


                                </p>

                            </div>
                        </div>


                        

                    </div>
                </div>
                
            </div>
        </header>
    );
};

export default Header2;
