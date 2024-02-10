import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image1 from "../../Assets/about-us-img-1.png";
import image2 from "../../Assets/about us-img-2.png";
import { motion } from "framer-motion";

const ContainerDiv = styled.div`
  border-radius: 32px;
  background-color: #f2ede7;
  padding-left: 100px;
  padding-right: 100px; // Add right padding for symmetry
  padding-top: 112px;
  padding-bottom: 112px;
  box-sizing: border-box; // Include padding in width calculation

  @media screen and (max-width: 768px) {
    padding-left: 20px; // Reduced padding for smaller screens
    padding-right: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 40px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px; // Reduced gap for smaller screens
  }
`;

const Col = styled(motion.div)`
  color: #0e1014;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-basis: 100%; // Ensure full width on smaller screens
  }
`;

const Col4 = styled(Col)`
  flex: 0 0 33.3333%;
  font-size: 31px;
  font-weight: 500;
  line-height: 34.1px;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Col6 = styled(Col)`
  flex: 0 0 50%;
  font-size: 36px;
  font-weight: 400;
  line-height: 56.2px;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Button = styled.button`
  border-radius: 60px;
  border: 1.5px solid #0e1014;
  background-color: transparent;
  color: #0e1014;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.09px;
  height: 48px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`;

const ImageDiv = styled.div`
  display: flex;
  gap: 40px;
  box-sizing: border-box;
  padding-top: 70px;
  @media screen and (max-width: 768px) {
    gap: 20px;
    padding-top: 48px;
  }
`;

const Image1 = styled(motion.img)`
  width: 385px;
  height: 296;
  @media screen and (max-width: 768px) {
    width: 182px;
    height: 140px;
  }
`;

const Image2 = styled(motion.img)`
  width: 280px;
  height: 232px;
  @media screen and (max-width: 768px) {
    width: 134px;
    height: 110px;
  }
`;

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("aboutSection");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const textAnimation = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const imageAnimation = {
    initial:{ x: 300, opacity: 0 },
    animate:{ x: 0, opacity: 1 },
    exit:{ x: -300, opacity: 0 }
  };

  return (
    <ContainerDiv id="aboutSection">
      <Row>
        <Col4 variants={textAnimation} initial="initial" animate={isVisible && "animate"}>
          WHO WE ARE
        </Col4>
        <Col6 variants={textAnimation} initial="initial" animate={isVisible && "animate"}>
          <p>
            Our team comprises highly skilled professionals with extensive
            experience in supporting a wide range of applications across various
            industries.
          </p>
          <p>
            We stay updated with the latest technologies and industry trends to
            deliver the best solutions. We look forward to partnering and
            helping to achieve the business objectives.
          </p>
          <Button>{"More about us"}</Button>
          <ImageDiv id="aboutImage">
            <Image1 variants={imageAnimation} src={image1} alt="about-us1" />
            <Image2 variants={imageAnimation} src={image2} alt="about-us2" />
          </ImageDiv>
        </Col6>
      </Row>
    </ContainerDiv>
  );
};

export default AboutSection;
