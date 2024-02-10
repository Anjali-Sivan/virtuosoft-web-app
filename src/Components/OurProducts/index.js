import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import product1 from "../../Assets/product1.png";
import product2 from "../../Assets/product2.png";
import product3 from "../../Assets/product3.png";
import { data } from "./contents";
import { useNavigate } from "react-router-dom";

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
  flex-wrap: wrap;
  gap: 40px;
  box-sizing: border-box;
  width: 100%;
`;

// const Col7 = styled.div`
//   flex: 0 0 calc((7 / 12) * 100% - (40px * (5 / 12)));
//   max-width: calc((7 / 12) * 100% - (40px * (5 / 12)));
//   border: 1.2px solid #c2ccd3;
//   box-sizing: border-box;
//   border-radius: 24px;
//   padding: 40px;
//   @media screen and (max-width: 768px) {
//     flex-basis: 100%;
//     max-width: 100%;
//     padding: 20px;
//   }
// `;

const Col5 = styled.div`
  flex: 0 0 calc((5 / 12) * 100% - (40px * (7 / 12)));
  max-width: calc((5 / 12) * 100% - (40px * (7 / 12)));
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const ResponsiveSVG = styled.div`
  display: block;
  max-width: 100%;
  height: auto;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Heading = styled.div`
  font-size: 31px;
  color: #0e1014;
  font-weight: 500;
  padding-bottom: 32px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Heading1 = styled.div`
  font-size: 31px;
  font-weight: 400;
  padding-bottom: 6px;
  color: #0e1014;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const SubHeading = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #0e1014;
  padding-top: 6px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 18px;
  font-weight: 400;
  padding-top: 24px;
  line-height: 32px;
  color: #555c67;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Col7 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Push content to the top and bottom */
  flex: 0 0 calc((7 / 12) * 100% - (40px * (5 / 12)));
  max-width: calc((7 / 12) * 100% - (40px * (5 / 12)));
  border: 1.2px solid #c2ccd3;
  box-sizing: border-box;
  border-radius: 24px;
  padding: 40px;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
    padding: 20px;
  }
`;

const ArrowsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  color: #555c67;
  padding-top: 32px; /* Adjust as needed */
  padding-bottom: 32px; /* Adjust as needed */
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;


const ArrowsAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ViewMoreButton = styled.button`
  border: 1.5px solid #0e1014;
  border-radius: 60px;
  height: 48px;
  padding-right: 26px;
  padding-left: 26px;
  color: #0e1014;
  font-size: 18px;
  background: #fff;
  font-weight: 600;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    height: 32px;
    padding-right: 18px;
    padding-left: 18px;
  }
`;

const ArrowButton = styled.button`
  background: #fff;
  border: 1.5px solid #d2dae0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const OurProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const navigate = useNavigate();

  const handlePrevClick = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 1 ? data.length  : prevIndex - 1
      );
  };

  const handleNextClick = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length  ? 1 : prevIndex + 1
      );
  };

  return (
    <Container>
      <Row>
        <Heading>{"OUR PRODUCTS"}</Heading>
      </Row>
      <Row>
        <AnimatePresence mode="wait">
          {data.map(
            (item, index) =>
              item.id === currentIndex && (
                <React.Fragment key={index}>
                  <Col7 key={index}>
                    <Heading1>{"SmartSync"}</Heading1>
                    <SubHeading>
                      <b>{item.subheading}</b>
                    </SubHeading>
                    <Paragraph
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.paragrapgh}
                    </Paragraph>
                    <ArrowsDiv>
                      <ArrowsAndText>
                        <ArrowButton onClick={handlePrevClick}>
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
                        <ArrowButton onClick={handleNextClick}>
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
                        {`0${item.id}/03`}
                      </ArrowsAndText>
                      <ViewMoreButton onClick={()=>navigate('/products')}>{"View More"}</ViewMoreButton>
                    </ArrowsDiv>
                  </Col7>
                  <Col5>
                    <ResponsiveSVG>
                      <svg
                        viewBox="0 0 493 544"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M400.292 0H20C8.95431 0 0 8.95429 0 20V524C0 535.046 8.9543 544 20 544H473C484.046 544 493 535.046 493 524V92.2809C493 84.8227 490.024 77.6727 484.733 72.4165L420.025 8.13552C414.779 2.92458 407.686 0 400.292 0Z"
                          fill={`${item.color}`}
                        />
                        <motion.image
                          href={
                            currentIndex === 1
                              ? product1
                              : currentIndex === 2
                              ? product2
                              : currentIndex === 3
                              ? product3
                              : product1
                          }
                          x={(493 - 429) / 2} // Calculate the x position to center align
                          y={(544 - 300) / 2} // Calculate the y position to center align
                          width="429"
                          height="300"
                          initial={{ opacity: 0, y: 0, x: 60 }}
                          animate={{ opacity: 1, y: 0, x: 0 }}
                          exit={{ opacity: 0, y: 0, x: 0 }}
                          transition={{ duration: 0.25 }}
                        />
                      </svg>
                    </ResponsiveSVG>
                  </Col5>
                </React.Fragment>
              )
          )}
        </AnimatePresence>
      </Row>
    </Container>
  );
};

export default OurProducts;
