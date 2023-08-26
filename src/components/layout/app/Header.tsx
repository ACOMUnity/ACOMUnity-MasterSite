import React, { useState } from "react";
import { styled } from "styled-components";
import { AiOutlineWallet } from "react-icons/ai";

import Logo from "../../common/Logo";
import { Button } from "../../../styles/element.styled";
import { Link } from "react-router-dom";

type OpenNav = boolean;

const Header: React.FC = () => {
  const [open, setOpen] = useState<OpenNav>(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <HeaderDetails>
        <Logo />
        <ConnectButton>
          <Button $type="outlined">connect wallet</Button>
        </ConnectButton>
        {/* <ButtonOpen
          type="button"
          onClick={handleToggle}
          className={open ? "open" : "close"}
        ></ButtonOpen> */}
      </HeaderDetails>
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
  padding: 24px 64px;
  @media (max-width: 580px) {
    padding: 24px;
  }
`;

const HeaderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ConnectButton = styled.div`
  button {
    display: flex;

    svg {
      font-size: 24px;
    }
  }
`;
