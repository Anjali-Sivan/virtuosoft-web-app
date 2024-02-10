import React from "react";
import styled from "styled-components";
import contactus from "../../Assets/contactus.png";
import contactmap from "../../Assets/contactmap.png";

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
  padding-top: 112px;
  padding-bottom: 112px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding-top: 50px;
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

const Col = styled.div`
  color: #0e1014;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Col6 = styled(Col)`
  flex: 0 0 50%;
  font-size: 40px;
  font-weight: 300;
  line-height: 56.2px;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Col12 = styled(Col)`
  flex: 0 0 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Col4 = styled(Col)`
  padding-top: 16px;
  flex: 0 0 33.3333%;
  color: #0e1014;
  font-size: 21px;
  line-height: 31px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    font-size: 11px;
    line-height: 15px;
  }
`;

const Col3 = styled(Col)`
  padding-top: 16px;
  flex: 0 0 25%;
  color: #0e1014;
  font-size: 21px;
  line-height: 31px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    font-size: 11px;
    line-height: 15px;
  }
`;

// const Col1 = styled(Col)`
//   flex: 0 0 8.3333%;
//   @media screen and (max-width: 768px) {
//     flex-basis: 100%;
//   }
// `;

const Heading = styled.div`
  font-size: 31px;
  color: #0e1014;
  line-height: 34px;
  font-weight: 500;
`;

const InputField = styled.input`
  background: #f2f2f2;
  height: 56px;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  color: #0e1014;
  font-size: 18px;
  border: none;
  width: 100%;
  font-family: "Inter", sans-serif; /* Set font family to Inter */

  &::placeholder {
    color: #0e1014; /* Change placeholder color */
  }

  @media screen and (min-width: 769px) {
    flex-basis: calc(50% - 12px); /* half width with 24px gap in between */
  }
`;

const TextArea = styled.textarea`
  background: #f2f2f2;
  height: 144px;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  color: #0e1014;
  font-size: 18px;
  border: none;
  width: 100%;
  font-family: "Inter", sans-serif; /* Set font family to Inter */

  &::placeholder {
    color: #0e1014; /* Change placeholder color */
  }

  @media screen and (min-width: 769px) {
    flex-basis: calc(50% - 12px); /* half width with 24px gap in between */
  }
`;

const Image = styled.img`
  width: 600px;
  height: 456px;
  max-width: 100%;
  max-height: 100%;
  @media screen and (max-width: 800px) {
    width: 300px;
    height: 228px;
    display:none;
  }
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  font-size: 15px;
  letter-spacing: 0.5%;
  width: 121px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #d9d9d9;
`;

const ContactUsPage = () => {
  return (
    <Section>
      <ContainerDiv>
        <Row>
          <Col6>
            <Heading>CONNECT WITH OUR TEAM</Heading>
            <form style={{ paddingTop: "32px" }}>
              <div style={{ display: "flex", gap: "24px" }}>
                <InputField placeholder="Your name" />
                <InputField placeholder="Email address" />
              </div>
              <div style={{ paddingTop: "24px" }}>
                <InputField placeholder="Phone number" />
              </div>
              <div style={{ paddingTop: "24px" }}>
                <TextArea placeholder="Your message" />
              </div>
              <div style={{ paddingTop: "24px" }}>
                <Button>{"Submit"}</Button>
              </div>
            </form>
          </Col6>
          <Col6>
            <Image src={contactus} alt="Contact-us" />
          </Col6>
        </Row>
        <Row>
          <Col12>
            <Divider />
          </Col12>
        </Row>
        <Row>
          <Heading>{"CONTACT"}</Heading>
        </Row>
        <Row>
          <Col4>
            {"Virtuosoft Technologies Private Limited,"}
            <br />
            {"ABE#2, Thejaswini Annexe,"}
            <br />
            {"Technopark Phase 1,Trivandrum, Kerala"}
          </Col4>
          {/* <Col1/> */}
          <Col3>
            {"Email"}
            <br />
            {"contactus@virtuosoft.in​"}
          </Col3>
          {/* <Col1/> */}
          <Col3>
            {"Linkedin"}
            <br />
            {"Facebook"}
          </Col3>
        </Row>
        <Row>
          {/* <Col4>
          {'CONTACT'}
          </Col4> */}
        </Row>
        <Row>
          <Col12>
            <img
              src={contactmap}
              alt="virtuosoft-map"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                height: "505px",
                width: "100%",
              }}
            />
          </Col12>
        </Row>
      </ContainerDiv>
    </Section>
  );
};

export default ContactUsPage;
