import React from "react";
import { styled } from "styled-components";

import Heading from "./_molecules/Heading";
import AppHeader from "../../components/layout/app/Header";
import SaleCard from "./_molecules/SaleCard";
import { salesData } from "./_molecules/salesData";

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      <AppContainer>
        <InnerContainer>
          <Heading />
          <SaleContainer>
            {salesData.map(
              (sale: { phase: string; title: string; link: string }) => (
                <SaleCard key={sale.link} sales={sale} />
              )
            )}
          </SaleContainer>
          {/* <Timer /> */}
          {/* <MoreInfo /> */}
        </InnerContainer>
      </AppContainer>
    </>
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
`;
