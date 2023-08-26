import React from "react";
import { styled } from "styled-components";
import Timer from "./_molecules/Timer";
import Heading from "./_molecules/Heading";
import MoreInfo from "./_molecules/MoreInfo";

const App: React.FC = () => {
  return (
    <AppContainer>
      <InnerContainer>
        <Heading />
        <Timer />
        <MoreInfo />
      </InnerContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: calc(100vh - 98px);
  background-image: linear-gradient(
    174deg,
    rgb(4, 7, 16) 56%,
    rgb(16, 17, 35) calc(56% + 2px)
  );
  padding: 24px 64px;
  @media (max-width: 580px) {
    padding: 24px;
    height: auto;
  }
`;

const InnerContainer = styled.div`
  max-width: 740px;
`;
