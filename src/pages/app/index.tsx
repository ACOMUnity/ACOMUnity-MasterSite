import React from "react";
import { styled } from "styled-components";

import Heading from "./_molecules/Heading";
import SaleCard from "./_molecules/SaleCard";
import { salesData } from "./_molecules/salesData";
import HomeHeader from "./HomeHeader";

const App: React.FC = () => {
  return (
    <>
      <AppContainer>
        <InnerContainer>
          <Heading Comp={<HomeHeader />} />
          <SaleContainer>
            {salesData.map(
              (
                sale: {
                  phase: string;
                  title: string;
                  link: string;
                  startTime: number;
                },
                i
              ) => (
                <SaleCard key={i} sales={sale} />
              )
            )}
          </SaleContainer>
        </InnerContainer>
      </AppContainer>
    </>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: calc(100vh - 98px);
  padding: 24px 64px;
  @media (max-width: 759px) {
    padding: 24px;
    height: auto;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 82px;
`;

const SaleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 64px;
  row-gap: 48px;
  align-items: center;

  @media (max-width: 759px) {
    justify-content: center;
  }
`;
