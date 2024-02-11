import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "./contents";
import { motion } from "framer-motion";

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
    flex-direction:column;
  }
`;

const Col7 = styled.div`
  flex: 0 0 calc((7 / 12) * 100% - (40px * (5 / 12)));
  max-width: calc((7 / 12) * 100% - (40px * (5 / 12)));
  box-sizing: border-box;
  display: block;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
    // padding: 20px;
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
  color: #0E1014;
  line-height:38px;
  font-weight:500;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Indicator = styled.div`
  font-size: 18px;
  color: #555C67;
  line-height:19.8px;
  font-weight:500;
  padding-top:8px;
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const SubHeading = styled.div`
  font-size: 44px;
  color: #0E1014;
  font-weight: 400;
  padding-top:50px;
  line-height:56px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 18px;
  font-weight: 400;
  padding: 0;
  color: #555C67;
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

const OurServices = () => {
  const [currentRow, setCurrentRow] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (currentRow < 5) {
        const scrollPosition = window.scrollY;
        // const windowHeight = window.innerHeight;
        const totalHeight = document.body.scrollHeight;
        const maxRows = data.length;
        const rowHeight = totalHeight / maxRows;

        // Calculate the current row based on scroll position
        const currentRow = Math.floor(scrollPosition / rowHeight);
        setCurrentRow(currentRow);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentRow]);

  return (
    <Container>
      {data.map((item, index) => (
        <Row key={index} style={{ display: currentRow === item.id ? "flex" : "none" }}>
          <Col5>
            <Heading>{"OUR SERVICES"}</Heading>
            <Indicator>{`0${item.id}/05`}</Indicator>
          </Col5>
          <Col7>
            <ImageDiv color={item.bgcolor}>{item.image}</ImageDiv>
            <SubHeading>{item.heading}</SubHeading>
            <Paragraph>
              {item.paragrapgh.map((para, paraIndex) => (
                <p key={paraIndex}>{para}</p>
              ))}
            </Paragraph>
          </Col7>
        </Row>
      ))}
    </Container>
  );
};

export default OurServices;
