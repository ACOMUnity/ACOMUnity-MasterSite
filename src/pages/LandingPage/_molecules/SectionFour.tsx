import React from "react";
import { styled } from "styled-components";
import SectionContainer from "./atoms/SectionContainer";

const SectionFour: React.FC = () => {
  return (
    <SectionContainer id="roadmap" nobg>
      <InnerContainer>
        <h3>RoadMap</h3>
        <p>Coming soon...</p>
      </InnerContainer>
    </SectionContainer>
  );
};

export default SectionFour;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  padding-bottom: 128px;

  h3 {
    font-size: 28px;
    letter-spacing: 7px;
    text-align: center;
  }
  p {
    font-size: 24px;
  }
`;
