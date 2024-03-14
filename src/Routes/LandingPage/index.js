import React, { useEffect } from "react";
import styled from "styled-components";
import AboutSection from '../../Components/AboutSection';
import HeroSection from "../../Components/HeroSection";
import OurServices from "../../Components/OurServices";
import OurProducts from "../../Components/OurProducts";
import ForWhomSection from "../../Components/ForWhomSection";
import OurMission from "../../Components/OurMission";
import Testimonials from "../../Components/Testimonials";

const Section = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 96px;
  box-sizing: border-box;
  width:100%;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 56px;
  }
`;

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Section>
        <HeroSection />
      </Section>
      <div id="about-us">
        <AboutSection />
        </div>
      <Section id="services">
        <OurServices />
      </Section>
      <Section id="products">
        <OurProducts />
      </Section>
      <Section>
        <ForWhomSection />
      </Section>
      <Section>
        <Testimonials />
      </Section>
      <OurMission />
    </>
  );
};

export default LandingPage;
