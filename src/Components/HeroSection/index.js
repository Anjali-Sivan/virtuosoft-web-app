import React from 'react';
import styled from 'styled-components';
import heroicon from '../../Assets/heroicon.png'; 
import image1 from '../../Assets/technology-consulting.png';
import image2 from '../../Assets/business data analytics.png';
import image3 from '../../Assets/clous-section.png';
import { motion } from 'framer-motion';

const CenteredText = styled(motion.div)`
  color: #0E1014;
  text-align: center;
  font-size: 65px;
  font-style: normal;
  font-weight: 500;
  line-height: 80px;
  letter-spacing: -1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top:28px;
  padding-bottom:52px;
  
  @media screen and (max-width: 768px) {
  font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: 28px;
  }
`;

const StyledImage = styled(motion.img)`
  width: 64px;
  height: 64px;
  @media screen and (max-width: 768px) {
  width: 22.325px;
height: 22.325px;
  }
`;

const TextWithImage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagesRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px; 
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledImages1 = styled(motion.img)`
  width: 428px;
  height: 280px;
  max-width:100%;
  max-height:100%;

  @media screen and (max-width: 768px) {
    width: 335px;
    height: 218px;
    max-width:100%;
    max-height:100%;
  }
`;

const StyledImages2 = styled(motion.img)`
  width: 520px;
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

const StyledImages3 = styled(motion.img)`
  width: 244px;
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

const HeroSection = () => {

  // Define animations for text and images
  const textAnimation = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const imageAnimation = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <>
    <CenteredText variants={textAnimation} initial="initial" animate="animate">
      <div>Mutually thrive by</div>
      <div>empowering our clients to</div>
      <TextWithImage>
        <span>achieve</span>
        <StyledImage variants={imageAnimation} src={heroicon} alt="Descriptive Alt Text" />
        <span>their aspirations</span>
      </TextWithImage>
    </CenteredText>
    <ImagesRow>
      <StyledImages1 variants={imageAnimation} src={image1} alt="Description for Image 1" />
      <StyledImages2 variants={imageAnimation} src={image2} alt="Description for Image 2" />
      <StyledImages3 variants={imageAnimation} src={image3} alt="Description for Image 3" className="hide-on-small" />
    </ImagesRow>
    </>
  );
};

export default HeroSection;
