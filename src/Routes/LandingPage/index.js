import React, { lazy } from "react";
import styled from "styled-components";
import HeroSection from "../../Components/HeroSection";
import OurServices from "../../Components/OurServices";
import OurProducts from "../../Components/OurProducts";
import ForWhomSection from "../../Components/ForWhomSection";
import OurMission from "../../Components/OurMission";

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

const AboutSection = lazy(() => import("../../Components/AboutSection"));

const LandingPage = () => {
  return (
    <>
      <Section>
        <HeroSection />
      </Section>
      <Section>
        <AboutSection />
      </Section>
      <Section>
        <OurServices />
      </Section>
      <Section>
        <OurProducts />
      </Section>
      <Section>
        <ForWhomSection />
      </Section>
      <OurMission />
    </>
  );
};

export default LandingPage;
