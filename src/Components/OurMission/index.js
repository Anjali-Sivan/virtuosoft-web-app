import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContainerDiv = styled.div`
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background-color: #E9E6FA;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 80px;
  padding-bottom: 72px;
  box-sizing: border-box; 

  @media screen and (max-width: 768px) {
    padding-left: 20px; 
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    box-sizing: border-box;
  }
`;

const Text = styled(motion.p)`
  font-size: 48px;
  color: #000000;
  font-weight: 400;
  line-height: 56px;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const OurMission = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(ref.current);

    // Cleanup
    return () => {
      // eslint-disable-next-line
      observer.unobserve(ref.current);
    };
    // eslint-disable-next-line
  }, []);

  const textAnimation = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <ContainerDiv ref={ref}>
      <Text
        variants={textAnimation}
        initial="initial"
        animate={inView ? "animate" : "initial"}
      >
        {
          "Our commitment to excellence, integrity, and continuous improvement ensures that we deliver reliable and high-quality software solutions that exceed expectations."
        }
      </Text>
    </ContainerDiv>
  );
};

export default OurMission;
