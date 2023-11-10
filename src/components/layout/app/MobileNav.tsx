import styled from "styled-components";
import {
  TbSmartHome,
  TbParachute,
  TbSwitchHorizontal,
  TbLock,
} from "react-icons/tb";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Container>
      <InnerContainer>
        <Link to="/app/dashboard" className="active">
          <TbSmartHome />
        </Link>
        <Link to="/app/dashboard">
          <TbParachute />
        </Link>
        <Link to="/app/dashboard">
          <TbSwitchHorizontal />
        </Link>
        <Link to="/app/dashboard">
          <TbLock />
        </Link>
      </InnerContainer>
    </Container>
  );
};

export default MobileNav;

const Container = styled.div`
  width: 100%;
  height: 9rem;
  background: #1e1e44;
  display: none;
  position: fixed;
  bottom: 0;

  @media (max-width: 760px) {
    display: block;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 2.4rem;
  align-items: center;
  justify-content: space-between;

  a {
    &.active {
      > svg {
        color: gold;
        /* font-size: 22px; */
      }
    }

    svg {
      color: #fff;
      width: 3.6rem;
      height: 3.6rem;
    }
  }
`;
