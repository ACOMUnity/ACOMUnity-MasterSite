import React from "react";
import HeroSection from "./_molecules/HeroSection";
import SectionOne from "./_molecules/SectionOne";
import { styled } from "styled-components";
import SectionTwo from "./_molecules/SectionTwo";
import SectionThree from "./_molecules/SectionThree";
import SectionFour from "./_molecules/SectionFour";

const LandingPage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection />
      <>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </>
    </PageContainer>
  );
};

export default LandingPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 128px; */
`;
