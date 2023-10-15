import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import SideBar from "./SideBar";

const chains = [arbitrum, mainnet, polygon];
const projectId = import.meta.env.VITE_WALLETCONNECT_KEY;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const AppLayout: React.FC = () => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Container>
          <InnerContainer>
            <SideBar />
            <Main>{<Outlet />}</Main>
          </InnerContainer>
        </Container>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default AppLayout;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  /* overflow: hidden; */
`;

const Main = styled.main`
  width: 100%;
  position: relative;
  overflow: auto;
  /* height: 200vh; */

  /* margin-bottom: ; */
`;
