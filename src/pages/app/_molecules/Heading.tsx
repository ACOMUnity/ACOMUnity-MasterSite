import React from "react";
import { styled } from "styled-components";
import { slideInRight } from "../../../styles/animate.styled";

interface Iprops {
  Comp: React.ReactElement;
}
const Heading = ({ Comp }: Iprops) => {
  return (
    <HeadingContainer>
      <InnerContainer>{Comp}</InnerContainer>
    </HeadingContainer>
  );
};

export default Heading;

const HeadingContainer = styled.div`
  width: 100%;
  font-family: "Tomorrow";

  @media (max-width: 580px) {
    padding-top: 24px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  flex-shrink: 0;
  border-radius: 1.2rem;
  background: #1e1e44;
  animation: ${slideInRight} 0.8s ease-in-out;
  padding: 2.4rem;
`;
