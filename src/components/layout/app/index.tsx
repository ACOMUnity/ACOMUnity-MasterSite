import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const AppLayout: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <main>{<Outlet />}</main>
      </Container>
    </>
  );
};

export default AppLayout;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100%;

  & main {
    width: 100%;
    position: relative;
  }
`;
