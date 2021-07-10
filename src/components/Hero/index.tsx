import React from 'react';
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
} from './HeroElements';
import Video from '../../resources/video.mp4';

function Hero() {
  return (
    <HeroContainer id="home">
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video}></VideoBackground>
      </HeroBackground>
      <HeroContent>
        <HeroH1>Armaan Lala</HeroH1>
        <HeroP>
          Mathmatics and Computer Science Student at Georgia Institute of
          Technology
        </HeroP>
        <HeroP>Freelance Developer</HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
