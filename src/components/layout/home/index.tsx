import { styled } from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const HomeLayout = () => {
  return (
    <MainContainer>
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    </MainContainer>
  );
};

export default HomeLayout;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100%;

  & main {
    width: 100%;
    position: relative;
  }
`;
