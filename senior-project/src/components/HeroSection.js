import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';

//to put a video as the background, use the following line
//<video src='/videos/video-1.mp4' autoPlay loop muted /> 
function HeroSection() {
  return (
    <div className='hero-container'> 
    
      <h1 className='rounded-md bg-black/70 px-4 py-2 text-sm '>SENIOR PROJECT</h1>

      <div className='py-8'>
        <button className='rounded-md bg-black/40 px-2 py-2 text-md text-white hover:bg-black/60'> WATCH INTRO</button>
      </div>
    </div>
  );
}

export default HeroSection;
