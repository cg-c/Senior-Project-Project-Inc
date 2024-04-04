import React from 'react';
import '../App.css';
import './HeroSection.css';

//to put a video as the background, use the following line
//<video src='/videos/video-1.mp4' autoPlay loop muted /> 
function HeroSection() {
  return (
    <div className='hero-container'> 
    
      <h1 className='rounded-md bg-black/15 px-4 py-2 text-5xl'>SENIOR PROJECT</h1>

      <div className='py-8'>
        <a href="https://mediasite.video.ufl.edu/Mediasite/Play/8ebcb534f140433296041170863ba8631d" target="_blank">
        <button className='rounded-md bg-white border-white px-2 py-2 text-md font-bold text-black hover:bg-black/60 hover:text-white'> WATCH INTRO</button>
        </a>      
      </div>
    </div>
  );
}

export default HeroSection;
