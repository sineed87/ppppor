// app/page.tsx
"use client";

import React, { useRef } from 'react';
// Default export check
import SmoothScroll from './components/SmoothScroll';// Default export check




import Navbar from './components/Navbar2';


import Work from "./components/Work"
import Offer from './components/Offer';
import Offer2 from './components/Offer2';

import Footer from "./components/Footer";




import { ScreenFitText } from './components/Hero2' // Ensure this path is correct
import Header3 from "./components/Header3"












export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={scrollRef} className="font-is ">
      <SmoothScroll>



        <Navbar />
        <div >
          <ScreenFitText />
        </div>
        <Header3/>
       
        
       
        

       





        <div className=' '>





          
          
      

         

          <div className='text-white p-10'>

            <Work />
           
            
            <Offer />
            <Offer2 />


          </div>
          <div className='rounded-[100px] '>

          </div>
         
          <div>

            <Footer />






          </div>







        </div>














      </SmoothScroll>
    </div>
  );
}
