import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

//to put a video as the background, use the following line
//<video src='/videos/video-1.mp4' autoPlay loop muted /> 
function HeroSection() {
  return (
    <div className='hero-container'> 
      <h1>SENIOR PROJECT</h1>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          WATCH INTRO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
