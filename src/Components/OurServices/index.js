import React, { useState } from "react";
import styled from "styled-components";
import { data } from "./contents";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    padding-top: 70px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 40px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Col7 = styled(motion.div)`
  flex: 0 0 calc((7 / 12) * 100% - (40px * (5 / 12)));
  max-width: calc((7 / 12) * 100% - (40px * (5 / 12)));
  box-sizing: border-box;
  display: block;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const Col5 = styled.div`
  flex: 0 0 calc((5 / 12) * 100% - (40px * (7 / 12)));
  max-width: calc((5 / 12) * 100% - (40px * (7 / 12)));
  display: block;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const Heading = styled.div`
  font-size: 31px;
  color: #0e1014;
  line-height: 38px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Indicator = styled.div`
  font-size: 18px;
  color: #555c67;
  line-height: 19.8px;
  font-weight: 500;
  padding-top: 8px;
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const SubHeading = styled(motion.div)`
  font-size: 44px;
  color: #0e1014;
  font-weight: 400;
  padding-top: 50px;
  line-height: 56px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 18px;
  font-weight: 400;
  padding: 0;
  color: #555c67;
  line-height: 32px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImageDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 312px;
  border-radius: 24px;
  background: ${(props) => props.color};
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 148px;
    border-radius: 12px;
  }
`;

const ArrowButtonDiv = styled.div`
  padding-top: 10px;
  display: flex;
`;

const ArrowButton = styled.button`
  background: #fff;
  border: 1.5px solid #d2dae0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex % data.length) + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => ((prevIndex - 2 + data.length) % data.length) + 1
    );
  };

  return (
    <Container>
      <AnimatePresence mode="wait">
        {data.map(
          (item, index) =>
            item.id === currentIndex && (
              <Row key={index}>
                <Col5>
                  <Heading>{"OUR SERVICES"}</Heading>
                  <Indicator>{`0${item.id}/05`}</Indicator>
                  <ArrowButtonDiv>
                    <ArrowButton onClick={handlePrev}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.53906 10.2266L16.0391 10.2266"
                          stroke="#0E1014"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.57812 15.2479L3.53646 10.2279L8.57812 5.20703"
                          stroke="#0E1014"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </ArrowButton>
                    &nbsp;&nbsp;
                    <ArrowButton onClick={handleNext}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4609 10.2266L3.96094 10.2266"
                          stroke="#0E1014"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.4219 15.2479L16.4635 10.2279L11.4219 5.20703"
                          stroke="#0E1014"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </ArrowButton>
                  </ArrowButtonDiv>
                </Col5>
                <Col7
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -200, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <ImageDiv
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    color={item.bgcolor}
                  >
                    {item.image}
                  </ImageDiv>
                  <SubHeading
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.heading}
                  </SubHeading>
                  <Paragraph>
                    {item.paragrapgh.map((para, paraIndex) => (
                      <p key={paraIndex}>{para}</p>
                    ))}
                  </Paragraph>
                </Col7>
              </Row>
            )
        )}
      </AnimatePresence>
    </Container>
  );
};

export default OurServices;
