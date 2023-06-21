import React, { useState } from "react";
import { styled } from "styled-components";

import Logo from "../common/Logo";
import { Link } from "react-router-dom";
import { Button } from "../../styles/element.styled";

type OpenNav = boolean;

const Header: React.FC = () => {
  const [open, setOpen] = useState<OpenNav>(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <HeaderContainer>
      <HeaderDetails>
        <Logo />
        <NavigationDetails>
          <NavLinks>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Partners</Link>
            </li>
            <li>
              <Link to="/">Roadmap</Link>
            </li>
          </NavLinks>
          <CallToAction>
            <Button $type="outlined">Launch App</Button>
          </CallToAction>
        </NavigationDetails>
        <ButtonOpen
          type="button"
          onClick={handleToggle}
          className={open ? "open" : "close"}
        ></ButtonOpen>
      </HeaderDetails>
      <Nav open={open ? "open" : "close"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Features</Link>
          </li>
          <li>
            <Link to="/">Partners</Link>
          </li>
          <li>
            <Link to="/">Roadmap</Link>
          </li>
          <Button $type="outlined" fullwidth="true">
            Launch App
          </Button>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: rgb(4, 8, 16);
  z-index: 99999;
  height: 12vh;
`;

const HeaderDetails = styled.div`
  display: flex;
  padding: 24px 48px;
  justify-content: space-between;
  align-items: center;
`;

const NavigationDetails = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 716px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  > li {
    a {
      color: #fff;
      font-weight: 16px;
    }
  }
`;

const ButtonOpen = styled.button`
  display: none;
  z-index: 999;
  width: 42px;
  height: 30px;
  background: none;
  position: relative;

  /* margin-top: 1rem; */
  color: gold;
  border: none;

  @media (max-width: 716px) {
    display: inline-flex;
  }

  &.close:before,
  &.close:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: 0.3s ease;
    transform: rotate(0deg);
    background-color: gold;
  }

  &.close:before {
    top: 0;
  }

  &.close:after {
    right: 0;
    width: 72%;
    top: 20px;
    right: -5px;
  }

  &.open:before,
  &.open:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    transition: 0.3s ease;
    /* transform: rotate(0deg); */
    background-color: gold;
  }

  &.open:before {
    top: 16.5px;
    right: -6.5px;
    width: 75%;
    transform: rotate(45deg);
  }

  &.open:after {
    right: -7px;
    top: 16px;
    width: 75%;
    transform: rotate(-45deg);
  }
`;

interface INav {
  open: string;
}

const Nav = styled.nav<INav>`
  transform: ${(props) =>
    props.open === "open" ? "translateX(0)" : "translateX(4400px)"};
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgb(4, 8, 16);
  z-index: 5;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  padding-top: 124px;
  justify-content: center;
  transition: all 0.3s ease-in;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 24px;

    li {
      font-size: 24px;

      a {
        color: silver;
      }
    }
  }
`;

const CallToAction = styled.div``;
