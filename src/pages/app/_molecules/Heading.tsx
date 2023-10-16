import React from "react";
import { styled } from "styled-components";
import { slideInRight } from "../../../styles/animate.styled";

const Heading: React.FC = () => {
  return (
    <HeadingContainer>
      <InnerContainer>
        <h1>
          <span>AGEMS</span> Token Sale Journey: Unveiling Four Distinct Phases
        </h1>
        <span>
          We are thrilled to introduce the AGEMS token sale, meticulously
          segmented into four distinct phases, each representing a crucial
          chapter in our journey.
        </span>
      </InnerContainer>
    </HeadingContainer>
  );
};

export default Heading;

const HeadingContainer = styled.div`
  width: 100%;
  /* padding-top: 64px; */

  @media (max-width: 580px) {
    padding-top: 24px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  /* background: linear-gradient(220deg, rgb(16, 17, 35), #110295); */
  background: linear-gradient(220deg, gold, #110295);
  box-shadow: 0px 4px 4px 4px #18255d;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 14px;
  animation: ${slideInRight} 0.8s ease-in-out;
  padding-top: 24px;

  h1 {
    margin: 0;

    span {
      text-shadow: rgb(255, 215, 0) 0px 4px 4px;
      font-size: 64px;
      font-family: monospace;
    }
  }
`;
