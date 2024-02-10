import React from 'react';
import styled from 'styled-components';
import image1 from '../../Assets/about-us-img-1.png';
import image2 from '../../Assets/about us-img-2.png';

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
  padding-top: 80px;
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

const Col7 = styled.div`
  flex: 0 0 calc((7 / 12) * 100% - (40px * (5 / 12)));
  max-width: calc((7 / 12) * 100% - (40px * (5 / 12)));
  border-radius: 24px;
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
    display:none;
  }
`;

const Col10 = styled.div`
  flex: 0 0 calc((10 / 12) * 100% - (40px * (7 / 12)));
  max-width: calc((10 / 12) * 100% - (40px * (7 / 12)));
  display: block;
  font-size: 35px;
  font-weight: 400;
  line-height: 56.2px;
  color:#0E1014;
  
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    font-size: 20px;
    line-height: 25px;
  }
`;

const Image1 = styled.img`
width : 100%;
height : 415px;
max-width:100%;
max-height:100%;
@media screen and (max-width: 768px) {
  height:202px;
}
`;

const Image2 = styled.img`
width : 100%;
height : 415px;
max-width:100%;
max-height:100%;
@media screen and (max-width: 768px) {
height : 202px;
}
`;

const Heading = styled.div`
font-size: 28px;
font-weight: 500;
line-height: 34.1px;
padding-top:100px;
color:#0E1014;
@media screen and (max-width: 768px) {
    font-size: 14px;
    }
`;

const AboutUsPage = () => {
    return (
        <Section>
        <Container>
         
            <Row>
                <Col7>
                <Image1 src={image1} alt="image-1"/>
                </Col7>
                <Col5>
                <Image2 src={image2} alt="image-1"/>
                </Col5>
            </Row>
            <Row>
                <Heading>
                    {'WHO WE ARE'}
                </Heading>
            </Row>
            <Row>
                <Col10>
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
          <p>
          Since our inception in 2021, we have been on a remarkable journey of growth and accomplishment. We started with a vision to revolutionize the IT landscape by providing cutting-edge solutions that empower our clients to achieve their goals. 
          </p>
          <p>
          We have honed our skills, expanded our team, and forged strong partnerships, allowing us to deliver exceptional value to our customers. With a strong foundation built on expertise, innovation, and customer satisfaction, we have been serving businesses and individuals with top-notch IT solutions that drive success.
          </p>
                </Col10>
            </Row>
        </Container>
        </Section>
    )
}


export default AboutUsPage;