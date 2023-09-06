import React from "react";
import { styled } from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

import Header from "./home/Header";
import AppHeader from "./app/Header";
import Footer from "./home/Footer";

const chains = [arbitrum, mainnet, polygon];
const projectId = import.meta.env.VITE_WALLETCONNECT_KEY;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const LandingPageLayout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Container>
          {location.pathname === "/" ? (
            <Header />
          ) : location.pathname === "/app" ? (
            <AppHeader />
          ) : (
            ""
          )}
          <main>{<Outlet />}</main>
          {location.pathname === "/" ? <Footer /> : ""}
        </Container>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default LandingPageLayout;

const Container = styled.div`
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
