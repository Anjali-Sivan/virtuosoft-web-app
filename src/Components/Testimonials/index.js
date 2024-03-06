import React from "react";
import styled from "styled-components";
import { data } from "./Contents";

const ContainerDiv = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  box-sizing: border-box;
  padding-bottom: 40px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

const Col4 = styled.div`
  flex: 1 1 calc(33.3333% - (2 * 40px / 3));
  max-width: calc(33.3333% - (2 * 40px / 3));
  font-weight: 500;
  border: 1px solid #CED8DF;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  color: #0e1014;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
    opacity: 1;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Heading = styled.div`
  font-size: 31px;
  color: #0E1014;
  font-weight: 500;
  line-height: 38px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const DescriptionText = styled.p`
  font-size: 18px;
  color: #555C67;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 26px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding-top: 5px;
  }
`;

const ClientDiv = styled.div`
 display: flex;
 align-items:center;
`;

const ClientDetailsDiv = styled.span`
 display: flex;
 flex-direction:column;
  padding-left:16px;
  color:#464751;
  font-size:16px;
  font-weight:400;
  line-height:22px;
`;

const Testimonials = () => {
  return (
    <ContainerDiv>
      <Row>
        <Heading>{"TESTIMONIALS"}</Heading>
      </Row>
      <Row>
        {data.map((item, index) => (
          <Col4 key={index}>
            <DescriptionText>{item.desc}</DescriptionText>
            <ClientDiv>
              <span>{item.icon}</span>
              <ClientDetailsDiv>
                <span><b>{'La Tricia Clark'}</b></span>
                <span>{'California, US'}</span>
              </ClientDetailsDiv>
            </ClientDiv>
          </Col4>
        ))}
      </Row>
    </ContainerDiv>
  );
};

export default Testimonials;
