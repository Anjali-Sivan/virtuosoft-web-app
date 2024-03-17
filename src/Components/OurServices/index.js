import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { data } from "./contents";
import { motion } from "framer-motion";

const Container = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  padding-top: 100px; /* Adjust based on your design */
  position: relative; /* Add position relative to the container */
  @media screen and (max-width: 768px) {
    padding-top: 70px; /* Adjust based on your design */
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 40px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  position: relative; /* Add position relative to the row */
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Col5 = styled.div`
  flex: 0 0 calc((5 / 12) * 100% - (40px * (7 / 12)));
  max-width: calc((5 / 12) * 100% - (40px * (7 / 12)));
  position: sticky;
  top: 100px; /* Adjust based on your design */
  align-self: flex-start;
  z-index: 1;
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

const SubHeading = styled.div`
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
  align-items: ${(props) => (props.index === 2 ? "flex-end" : "center")};
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const rowRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const indicesInView = rowRefs.current
        .filter((ref) => ref) // Filter out any null refs
        .map((ref, index) => {
          const top = ref.getBoundingClientRect().top;
          return { index, top };
        })
        .filter(({ top }) => top > 0 && top < windowHeight);

      if (indicesInView.length > 0) {
        const newIndex = indicesInView[0].index;
        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Row>
        <Col5>
          <Heading>{"OUR SERVICES"}</Heading>
          <Indicator>{`0${currentIndex + 1}/05`}</Indicator>
        </Col5>
        <div
          style={{
            flex: "0 0 calc((7 / 12) * 100% - (40px * (5 / 12)))",
            maxWidth: "calc((7 / 12) * 100% - (40px * (5 / 12)))",
            boxSizing: "border-box",
            overflowY: "hidden",
          }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={index === currentIndex ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.5 }}
              ref={(el) => (rowRefs.current[index] = el)}
              // style={{
              //   marginBottom: "20px",
              // }}
            >
              <ImageDiv color={item.bgcolor} index={item.id}
                key={index}
                initial={{ opacity: 0, y: item.id===2?-20:70 }}
                animate={index === currentIndex ? { opacity: 1, y: 0,transition:{duration:1,delay:0.5} } : {}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.5 }}
                ref={(el) => (rowRefs.current[index] = el)} >
                {item.image}
              </ImageDiv>
              <SubHeading>{item.heading}</SubHeading>
              <Paragraph
              initial={{ opacity: 0, y: 20 }}
              animate={index === currentIndex ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              >
                {item.paragraph.map((para, paraIndex) => (
                  <p key={paraIndex}>{para}</p>
                ))}
              </Paragraph>
            </motion.div>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default OurServices;
