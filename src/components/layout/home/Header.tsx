import React, { useState } from "react";
import { styled } from "styled-components";

import Logo from "../../common/Logo";
import { Button } from "../../../styles/element.styled";
import { Link } from "react-router-dom";

type OpenNav = boolean;

const Header: React.FC = () => {
  const [open, setOpen] = useState<OpenNav>(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const [activeLink, setActiveLink] = useState("hero"); // Default active link

  const scrollIntoView = (id: string) => {
    setActiveLink(id);
    const element = document.getElementById(id) as HTMLElement;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      // inline: "nearest",
    });
  };

  console.log(activeLink);

  return (
    <HeaderContainer>
      <HeaderDetails>
        <Logo />
        <NavigationDetails>
          <NavLinks>
            <li
              className={activeLink === "hero" ? "active" : ""}
              onClick={() => scrollIntoView("hero")}
            >
              Home
            </li>
            <li
              className={activeLink === "about" ? "active" : ""}
              onClick={() => scrollIntoView("about")}
            >
              About
            </li>
            <li
              className={activeLink === "features" ? "active" : ""}
              onClick={() => scrollIntoView("features")}
            >
              Features
            </li>
            <li
              className={activeLink === "partners" ? "active" : ""}
              onClick={() => scrollIntoView("partners")}
            >
              Partners
            </li>
            <li
              className={activeLink === "roadmap" ? "active" : ""}
              onClick={() => scrollIntoView("roadmap")}
            >
              Roadmap
            </li>
          </NavLinks>
          <CallToAction>
            <Link to="/app">
              <Button $type="outlined">Launch App</Button>
            </Link>
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
          <li
            onClick={() => {
              scrollIntoView("hero");
              handleToggle();
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              scrollIntoView("about");
              handleToggle();
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              scrollIntoView("features");
              handleToggle();
            }}
          >
            Features
          </li>
          <li
            onClick={() => {
              scrollIntoView("partners");
              handleToggle();
            }}
          >
            Partners
          </li>
          <li
            onClick={() => {
              scrollIntoView("roadmap");
              handleToggle();
            }}
          >
            Roadmap
          </li>
          <Link to="/app">
            <Button $type="outlined" fullwidth="true">
              Launch App
            </Button>
          </Link>
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
`;

const HeaderDetails = styled.div`
  display: flex;
  padding: 24px 48px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 420px) {
    padding: 24px;
  }
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
    color: #fff;
    font-weight: 400;
    cursor: pointer;

    &.active {
      color: gold;
      font-weight: 700;
      transition: all 0.8s ease-in;
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
    height: 2px;
    position: absolute;
    transition: 0.3s ease;
    transform: rotate(0deg);
    background-color: gold;
  }

  &.close:before {
    top: 5px;
    right: 0;
    width: 80%;
  }

  &.close:after {
    right: 0;
    width: 60%;
    top: 20px;
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
    props.open === "open" ? "translateX(0)" : "translateX(-4400px)"};
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
  transition: all 0.8s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 24px;

    li {
      font-size: 24px;
      color: silver;
    }
  }
`;

const CallToAction = styled.div``;
