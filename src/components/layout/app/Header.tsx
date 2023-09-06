import React from "react";
import { styled } from "styled-components";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import { AiOutlineWallet } from "react-icons/ai";

import Logo from "../../common/Logo";
import { Button } from "../../../styles/element.styled";
import { shortenAddress } from "../../../utils/shortenAddress";

const AppHeader: React.FC = () => {
  const { open, close } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <HeaderContainer>
      <HeaderDetails>
        <Logo />
        {isConnected ? (
          <Connected>
            <AiOutlineWallet />
            <p>{shortenAddress(address as string)}</p>
          </Connected>
        ) : (
          <ConnectButton>
            <Button onClick={() => open()} $type="outlined">
              connect wallet
            </Button>
          </ConnectButton>
        )}
      </HeaderDetails>
    </HeaderContainer>
  );
};

export default AppHeader;

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

const ConnectButton = styled.div`
  button {
    display: flex;

    svg {
      font-size: 24px;
    }
  }
`;

const Connected = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border: 3px solid gold;
  border-radius: 50px;
  cursor: pointer;

  svg {
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }
`;
