import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import image1 from "../../Assets/about-us-img-1.png";
import image2 from "../../Assets/about-us-img-2.png";
import { useNavigate } from "react-router-dom";

const ContainerDiv = styled.div`
  border-radius: 32px;
  background-color: #f2ede7;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 112px;
  padding-bottom: 112px;
  box-sizing: border-box;
  max-width: 100vw;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 40px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Col = styled(motion.div)`
  color: #0e1014;
  box-sizing: border-box;
`;

const Col4 = styled(Col)`
  flex: 0 0 33.3333%;
  font-size: 31px;
  font-weight: 500;
  line-height: 56.2px;
  padding: 0;
`;

const Col6 = styled(Col)`
  flex: 0 0 50%;
  font-size: 36px;
  font-weight: 400;
  line-height: 56.2px;
  padding: 0;
  margin: 0;
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
  
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  gap: 40px;
  box-sizing: border-box;
  padding-top: 70px;

  @media screen and (max-width: 768px) {
    gap: 10px;
    padding-top: 48px;
  }
`;

const Image1 = styled(motion.img)`
  width: 385px;
  height: 296px;
  border-radius:16px;
  @media screen and (max-width: 768px) {
    width: 158px;
    height: 135px;
    border-radius:8px;
  }
`;

const Image2 = styled(motion.img)`
  width: 280px;
  height: 232px;
  border-radius:16px;
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 105px;
    border-radius:8px;
  }
`;

const AboutSection = () => {
  // State for image visibility
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  // Refs for images
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  const navigate = useNavigate();

  // Intersection observer for image animation
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setIsVisible1(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (imageRef1.current) {
      observer1.observe(imageRef1.current);
    }

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsVisible2(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (imageRef2.current) {
      observer2.observe(imageRef2.current);
    }

    // Cleanup
    return () => {
      if (imageRef1.current) {
        observer1.unobserve(imageRef1.current);
      }
      if (imageRef2.current) {
        observer2.unobserve(imageRef2.current);
      }
    };
  }, []);

  return (
    <ContainerDiv>
      <Row>
        <Col4>
          WHO WE ARE
        </Col4>
        <Col6>
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
          <Button onClick={()=>navigate('/about-us')}>More about us</Button>
          <ImageDiv>
            <Image1
              ref={imageRef1}
              src={image1}
              alt="about-us1"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible1 ? 1 : 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <Image2
              ref={imageRef2}
              src={image2}
              alt="about-us2"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible2 ? 1 : 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </ImageDiv>
        </Col6>
      </Row>
    </ContainerDiv>
  );
};

export default AboutSection;

