import React from "react";
import styled from "styled-components";
import { data } from "./Contents";

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

const ContainerDiv = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const PageHeading = styled.div`
  padding-top: 24px;
  font-size: 31px;
  font-weight: 500;
  line-height: 38px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    padding-top: 12px;
    line-height: 19px;
  }
`;

const PageSubHeading = styled.div`
  padding-top: 12px;
  font-size: 21px;
  font-weight: 500;
  line-height: 23px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    padding-top: 6px;
    line-height: 11.5px;
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

const Col = styled.div`
  color: #0e1014;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Col4 = styled(Col)`
  flex: 1 1 calc(33.3333% - (2 * 40px / 3));
  max-width: calc(33.3333% - (2 * 40px / 3));
  border: 1px solid #ced4da;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.div`
  border: 1px solid #e0e5e9;
  background: transparent;
  color: #0e1014;
  font-size: 14px;
  font-weight: 400;
  line-height: 13.2px;
  letter-spacing: 0.5%;
  height: 32px;
  display: flex;
  align-items: center; /* Align contents vertically center */
  justify-content: space-between; /* Space between contents */
  width: auto;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 32px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.status === "live"
      ? "#5AB850"
      : props.status === "progress"
      ? "#FF9466"
      : props.status === "uat"
      ? "#FFC826"
      : "#4296F9"};
`;

const Heading = styled.div`
  padding-top: 24px;
  font-size: 21px;
  font-weight: 500;
  line-height: 28px;
  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding-top: 12px;
    line-height: 14px;
  }
`;

const DescriptionText = styled.div`
  padding-top: 20px;
  font-size: 16px;
  color: #464751;
  line-height: 24px;
  @media screen and (max-width: 768px) {
    font-size: 9px;
    padding-top: 10px;
    line-height: 10px;
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #e0e5e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 30px;
  height: 30px;
  }
`;

const OurAchievements = () => {
  return (
    <Section>
      <ContainerDiv>
        <Row>
          <div style={{display:'flex',flexDirection:'column'}}>
          <PageHeading>{"OUR ACHIEVEMENTS"}</PageHeading>
          <PageSubHeading>{"Client/Project"}</PageSubHeading>
          </div>
        </Row>
        <Row>
          {data.slice(0, 3).map((item, index) => (
            <Col4 key={index}>
              <StyledDiv>
                <IconContainer>{item.icon}</IconContainer>
                <Label>
                  <Indicator
                    status={
                      item.label === "On live"
                        ? "live"
                        : item.label === "Ongoing"
                        ? "progress"
                        : item.label === "In UAT"
                        ? "uat"
                        : "ready"
                    }
                  ></Indicator>
                  &nbsp;{item.label}
                </Label>
              </StyledDiv>
              <Heading>{item.heading}</Heading>
              <DescriptionText>{item.desc}</DescriptionText>
            </Col4>
          ))}
        </Row>
        <Row>
          {data.slice(3).map((item, index) => (
           <Col4 key={index}>
           <StyledDiv>
             <IconContainer>{item.icon}</IconContainer>
             <Label>
               <Indicator
                 status={
                   item.label === "On live"
                     ? "live"
                     : item.label === "Ongoing"
                     ? "progress"
                     : item.label === "In UAT"
                     ? "uat"
                     : "ready"
                 }
               ></Indicator>
               &nbsp;{item.label}
             </Label>
           </StyledDiv>
           <Heading>{item.heading}</Heading>
           <DescriptionText>{item.desc}</DescriptionText>
         </Col4>
          ))}
        </Row>
      </ContainerDiv>
    </Section>
  );
};

export default OurAchievements;
