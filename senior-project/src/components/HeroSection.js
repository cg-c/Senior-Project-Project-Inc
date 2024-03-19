import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';

//to put a video as the background, use the following line
//<video src='/videos/video-1.mp4' autoPlay loop muted /> 
function HeroSection() {
  return (
    <div className='hero-container'> 
    
      <h1 className='rounded-md bg-black/15 px-4 py-2 text-5xl'>SENIOR PROJECT</h1>

      <div className='py-8'>
        <a href="https://youtube.com" target="_blank">
        <button className='rounded-md bg-black/40 px-2 py-2 text-md text-white hover:bg-black/60'> WATCH INTRO</button>
        </a>      
      </div>
    </div>
  );
}

export default HeroSection;
