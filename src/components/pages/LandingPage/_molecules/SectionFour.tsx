import React from "react";
import { styled } from "styled-components";
import SectionContainer from "./atoms/SectionContainer";

const SectionFour: React.FC = () => {
  return (
    <SectionContainer id="roadmap" nobg>
      <InnerContainer>
        <h3>RoadMap</h3>
      </InnerContainer>
    </SectionContainer>
  );
};

export default SectionFour;

// const SectionFourContainer = styled.div`
//   width: 100%;
//   padding: 0 24px;
//   padding-top: 128px;
// `;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;

  h3 {
    font-size: 28px;
    letter-spacing: 7px;
    text-align: center;
  }
`;
