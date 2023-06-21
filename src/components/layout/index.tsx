import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const LandingPageLayout: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <main>{<Outlet />}</main>
        <Footer />
      </Container>
    </>
  );
};

export default LandingPageLayout;

const Container = styled.div`
  /* padding: 24px; */
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100%;

  & main {
    width: 100%;
    position: relative;
    /* min-height: calc(100vh); */
  }
`;
