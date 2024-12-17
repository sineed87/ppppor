import React from 'react';
import { Button } from "./buttonanim/button";
import { CircleChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className=" justify-center h-screen relative">
            {/* Text content */}
            <div className="flex items-center justify-center  font-normal h-screen leading-none font-is text-white pt-40">
                <div className=' flex items-center flex-col '>
                    <Button className='flex items-center gap-2 border rounded-[80px] p-2 pr-4 pl-4' variant="gooeyRight">

                        <CircleChevronRight strokeWidth={2} size={16} />
                        <h1>
                            Subscription. Pause or cancel anytime
                        </h1>


                    </Button>


                    <div className='flex-col  items-center justify-center pt-5 '>
                        <h1 className='text-6xl text-center'>All-in-one solution
                        </h1>
                        <h1 className='text-6xl'>Unlimited design & development.</h1>
                    </div>
                    <div className="flex justify-center pt-20 w-[1000px] ">
                        <video
                            className="shadow-lg rounded-[40px] w-auto h-auto  pointer-events-none"
                            autoPlay
                            loop
                            muted
                        >
                            <source src="/videos/img1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>


            </div>



            {/* Image on the left */}


            {/* Video at the bottom-right */}

        </div>
    );
};

export default Hero;
