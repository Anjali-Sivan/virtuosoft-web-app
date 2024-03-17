import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import heroicon from '../../Assets/heroicon.svg'; 
import image1 from '../../Assets/technology-consulting.png';
import image2 from '../../Assets/business data analytics.png';
import image3 from '../../Assets/clous-section.png';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import animationData from "./lottiefile.json"; 
import customer from './customerslottie.json';
import graph from './graphlottie.json';
import user from '../../Assets/user.png';
import { gsap } from 'gsap';
import SplitText from "gsap-trial/SplitText";


const CenteredText = styled.div`
  color: #0E1014;
  text-align: center;
  font-size: 82px;
  font-style: normal;
  font-weight: 500;
  line-height: 88px;
  letter-spacing: -1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 52px;
  position: relative; /* Add position relative */
  overflow: hidden; /* Hide overflow to prevent scrollbars */

  @media screen and (max-width: 768px) {
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }
`;

const StyledImage = styled(motion.img)`
  width: 64px;
  height: 64px;
  @media screen and (max-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;

const TextWithImage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagesRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px; 
  align-items: flex-end;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image1Container = styled.div`
  position:relative;
`;

const OverlayImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 48px;
`;

const OverlayImage1 = styled.div`
  position: absolute;
  top: -30px;
  left: 41px;
  width: 207px;
  height: 200px;
  @media screen and (max-width: 768px) {
    width: 134px;
    height: 128px;
    top: -15px;
    left: 20px;
  }
`;

const OverlayImage2 = styled.div`
  position: absolute;
  bottom: 5px;
  right: 41px;
  height: 351px;
  @media screen and (max-width: 768px) {
    width: 157px;
    height: 226px;
    right: 20px;
    bottom:-5px;
  }
`;

const StyledImages1 = styled(motion.img)`
  width: 100%;
  height: 280px;
  max-width:100%;
  max-height:100%;
  justify-content:flex-start;

  @media screen and (max-width: 768px) {
    width: 335px;
    height: 218px;
    max-width:100%;
    max-height:100%;
  }
`;

const StyledImages2 = styled(motion.img)`
  width: 100%;
  height: 304px;
  max-width:100%;
  max-height:100%;
  position:relative;

  @media screen and (max-width: 768px) {
    width: 335px;
    height: 197px;
    max-width:100%;
    max-height:100%;
  }
`;

const Image3Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  @media screen and (max-width: 768px) {
    display:none;
  }
`;

const StyledImages3Container = styled.div`
  width: 106px;
  height: 104px;
`;

const StyledImages3 = styled(motion.img)`
  width: 100%;
  height: 175px;
  max-width:100%;
  max-height:100%;

  @media screen and (max-width: 768px) {
    width: 335px;
    height: 218px;
    max-width:100%;
    max-height:100%;
  }
`;

const StyledImages4 = styled(motion.img)`
  width: 100%;
  height: 351px;
  max-width:100%;
  max-height:100%;

  @media screen and (max-width: 768px) {
    width: 335px;
    height: 218px;
    max-width:100%;
    max-height:100%;
  }
`;

const HeroSection = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);
    const splitText = new SplitText(textRef.current, { type: 'lines' });
    gsap.from(splitText.lines[0], { duration: 1.2, y: 100, opacity: 0, stagger: 0.1 });
    gsap.from(splitText.lines[1], { duration: 1.2, y: 100, opacity: 0, stagger: 0.1, delay: 0.4 });
    setIsAnimationComplete(true);
  }, []);

  const imageAnimation = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 2 ,delay:0.5} },
  };
  const imageAnimation1 = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 2.5,delay:0.6} },
  };

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  return (
    <>
      <CenteredText ref={textRef}>
        <div >Empowering our clients to</div>
        <TextWithImage>
          <span>achieve</span>
          <StyledImage  src={heroicon} alt="Descriptive Alt Text" />
          <span>their aspirations</span>
        </TextWithImage>
      </CenteredText>
      <ImagesRow>
        <Image1Container>
          <StyledImages1 variants={imageAnimation} initial="initial" animate="animate" src={image1} alt="Description for Image 1" />
          <OverlayImage>
            <Lottie
              animationData={customer}
              autoplay={!isAnimationComplete}
              loop={false}
              onComplete={handleAnimationComplete}
            />
          </OverlayImage>
        </Image1Container>
        <Image1Container>
          <StyledImages2 variants={imageAnimation} initial="initial" animate="animate" src={image2} alt="Description for Image 2" />
          <OverlayImage1>
            <Lottie
              animationData={graph}
              autoplay={!isAnimationComplete}
              loop={false}
              onComplete={handleAnimationComplete}
              
            />
          </OverlayImage1>
          <OverlayImage2>
            <StyledImages4 variants={imageAnimation1} initial="initial" animate="animate" src={user} alt="Description for Image 2" />
          </OverlayImage2>
        </Image1Container>
        <Image3Container>
          <StyledImages3Container>
            <Lottie
              animationData={animationData}
              autoplay={!isAnimationComplete}
              loop={false}
              onComplete={handleAnimationComplete}
            />
          </StyledImages3Container>
          <StyledImages3 variants={imageAnimation} initial="initial" animate="animate" src={image3} alt="Description for Image 3" className="hide-on-small" />
        </Image3Container>
      </ImagesRow>
    </>
  );
};

export default HeroSection;
