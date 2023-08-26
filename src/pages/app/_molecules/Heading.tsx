import React from "react";
import { styled } from "styled-components";
import { slideInRight } from "../../../styles/animate.styled";

const Heading: React.FC = () => {
  return (
    <HeadingContainer>
      <InnerContainer>
        <h1>
          <span>ACOM</span> sale live in:
        </h1>
        <span>
          ACOM is the token that will fuel the entire DAO. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nulla ea quasi consectetur eaque
        </span>
      </InnerContainer>
    </HeadingContainer>
  );
};

export default Heading;

const HeadingContainer = styled.div`
  width: 100%;
  padding-top: 64px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${slideInRight} 0.8s ease-in-out;

  h1 {
    margin: 0;

    span {
      text-shadow: rgb(255, 215, 0) 0px 2px 12px;
      font-size: 64px;
      font-family: monospace;
    }
  }
`;
