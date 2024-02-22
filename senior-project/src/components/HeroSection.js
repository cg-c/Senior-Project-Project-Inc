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
      <p>Getting Started</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
