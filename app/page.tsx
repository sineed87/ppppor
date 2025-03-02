// app/page.tsx
"use client";

import React, { useRef } from 'react';
// Default export check
import SmoothScroll from './components/SmoothScroll';// Default export check




import Navbar from './components/Navbar2';


import Work from "./components/Work"
import Offer from './components/Offer';
import Pricing from './components/Pricing';
import Footer from "./components/Footer";


import Comp from "./components/Comp"

import { ScreenFitText } from './components/Hero2' // Ensure this path is correct
import Header3 from "./components/Header3"
import Header4 from "./components/Header4"











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
