// app/page.tsx
"use client";

import React, { useRef } from 'react';
         // Default export check
import SmoothScroll from './components/SmoothScroll';// Default export check



import Hero from './components/Hero2';
import Navbar from './components/Navbar2';

import Maskcomponent from "./components/Maskcomponent"
import Work from "./components/Work"
import Offer from './components/Offer';
import Pricing from './components/Pricing';
import Footer from "./components/Footer";
import Ino from "./components/Ino"





export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={scrollRef} className="font-work ">
      <SmoothScroll>
        
          <Navbar/>
        
        

       

        <div className=' '>
          

          
         
          
          <Hero/>
          <div className='font-is text-white'>
            <Maskcomponent/>
          </div>
       
          <div className='text-white'>
            
             <Work/>
             <Offer/>
             
          </div>
          <div className='font-is bg-[#121212] border rounded-[80px]'>
            <Pricing/>
          </div>
          <div>
            <Ino/>
            <Footer/>
          </div>
          
          

          
         
          

        </div>
        
       


       



        
        
       

        

      </SmoothScroll>
    </div>
  );
}
