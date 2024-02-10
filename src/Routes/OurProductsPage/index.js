import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { data } from "../../Components/OurProducts/contents";
import product1 from "../../Assets/product1.png";
import product2 from "../../Assets/product2.png";
import product3 from "../../Assets/product3.png";
import diagram from "../../Assets/diagram.png";

const Section = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 96px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 56px;
  }
`;

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
  padding-bottom: 100px;
`;

const Col6 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    width: 100%;
  }
`;

const Col1 = styled.div`
  flex: 0 0 calc(100% / 12); // Assuming you're using a 12-column grid system
  width: calc(100% / 12);
  @media screen and (max-width: 768px) {
    display: none; // Hide on smaller screens
  }
`;

const Col5 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    width: 100%;
  }
`;

const ResponsiveSVG = styled.div`
  display: block;
  max-width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: auto;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: auto;
  }
`;

const Heading = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  font-size: 31px;
  font-weight: 500;
  color: #0e1014;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Heading1 = styled.div`
  font-size: 31px;
  font-weight: 400;
  line-height: 34px;
  color: #0e1014;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const SubHeading = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  padding-top: 6px;
  color: #0e1014;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 0;
  line-height: 32px;
  color: #555c67;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: 100%;
`;

const OurProductsPage = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col6>
            <Image src={diagram} alt="data-diagram" />
          </Col6>
        </Row>
        {/* <Row> */}
        <Heading>{"OUR PRODUCTS"}</Heading>
        {/* </Row> */}
        {data.map((item, index) => (
          <Row key={index}>
            {index % 2 === 0 ? (
              <>
                <Col6>
                  <Heading1>{"SmartSync"}</Heading1>
                  <SubHeading>
                    <b>{item.subheading}</b>
                  </SubHeading>
                  <Paragraph>{item.paragrapgh}</Paragraph>
                </Col6>
                <Col1 /> {/* Spacer */}
                <Col5>
                  <ResponsiveSVG>
                    <svg
                      width="493"
                      height="432"
                      viewBox="0 0 493 432"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M402.121 0H20C8.95431 0 0 8.95431 0 20V412C0 423.046 8.9543 432 20 432H473C484.046 432 493 423.046 493 412V77.6038C493 69.0309 489.073 60.9304 482.342 55.6207L419.463 6.01686C414.522 2.11958 408.413 0 402.121 0Z"
                        fill={`${item.color}`}
                      />

                      <motion.image
                        href={
                          item.id === 1
                            ? product1
                            : item.id === 2
                            ? product2
                            : item.id === 3
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
              </>
            ) : (
              <>
                <Col5>
                  <ResponsiveSVG>
                    <svg
                      width="493"
                      height="432"
                      viewBox="0 0 493 432"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M402.121 0H20C8.95431 0 0 8.95431 0 20V412C0 423.046 8.9543 432 20 432H473C484.046 432 493 423.046 493 412V77.6038C493 69.0309 489.073 60.9304 482.342 55.6207L419.463 6.01686C414.522 2.11958 408.413 0 402.121 0Z"
                        fill={`${item.color}`}
                      />
                      <motion.image
                        href={
                          item.id === 1
                            ? product1
                            : item.id === 2
                            ? product2
                            : item.id === 3
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
                <Col1 /> {/* Spacer */}
                <Col6>
                  <Heading1>{"SmartSync"}</Heading1>
                  <SubHeading>
                    <b>{item.subheading}</b>
                  </SubHeading>
                  <Paragraph>{item.paragrapgh}</Paragraph>
                </Col6>
              </>
            )}
          </Row>
        ))}
      </Container>
    </Section>
  );
};

export default OurProductsPage;
