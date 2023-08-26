import React from "react";
import { styled } from "styled-components";
import { GiCheckMark } from "react-icons/gi";

import featGovernance from "../../../assets/feat-decentralized.svg";
import ecosystem from "../../../assets/Ecosystem-amico.svg";
import integration from "../../../assets/integration.svg";
import enhance from "../../../assets/enhance.svg";
import SectionContainer from "./atoms/SectionContainer";

const SectionTwo: React.FC = () => {
  return (
    <SectionContainer id="features">
      <SectionTwoContainer>
        <InnerContentBox>
          <InnerContent>
            <SVGContainer>
              <img src={featGovernance} alt="decentralized governance" />
            </SVGContainer>
            <TextContainer>
              <TextHeader>
                <h3>
                  <em>Decentralized Governance</em>
                </h3>
              </TextHeader>
              <TextBody>
                <Entry>
                  <SVGCheck>
                    <GiCheckMark />
                  </SVGCheck>
                  <p>
                    We empowers community members to actively shape the
                    direction of ACOMUnity Master DAO.
                  </p>
                </Entry>
                <Entry>
                  <SVGCheck>
                    <GiCheckMark />
                  </SVGCheck>
                  <p>
                    Efficient resource allocation ensures maximum impact and
                    sustainable growth within ACOMUnity Master DAO.
                  </p>
                </Entry>
              </TextBody>
            </TextContainer>
          </InnerContent>
          <InnerContent>
            <SVGContainer>
              <img src={ecosystem} alt="Scalable DAO Ecosystem" />
            </SVGContainer>
            <TextContainer>
              <TextHeader>
                <h3>Scalable DAO Ecosystem</h3>
              </TextHeader>
              <TextBody>
                <Entry>
                  <SVGCheck>
                    <GiCheckMark />
                  </SVGCheck>
                  <p>
                    ACOMUnity Master DAO enables efficient coordination and
                    collaboration across various projects and communities
                    through the creation and management of multiple DAOs.
                  </p>
                </Entry>
                <Entry>
                  <SVGCheck>
                    <GiCheckMark />
                  </SVGCheck>
                  <p>
                    We seamlessly integrates within the Web3 landscape, offering
                    flexibility and adaptability for diverse initiatives and
                    projects.
                  </p>
                </Entry>
              </TextBody>
            </TextContainer>
          </InnerContent>
          <InnerContent>
            <SVGContainer>
              <img
                src={integration}
                alt="Seamless integratoin with web3 ecosystem"
              />
            </SVGContainer>
            <TextContainer>
              <TextHeader>
                <h3>Seamless Integration with Web3 Ecosystem</h3>
              </TextHeader>
              <TextBody>
                <Entry>
                  <SVGCheck>
                    <GiCheckMark />
                  </SVGCheck>
                  <p>
                    ACOMUnity Master DAO enables seamless interaction between
                    diverse blockchain networks, fostering collaboration and
                    asset transfers across multiple platforms.
                  </p>
                </Entry>
                <Entry>
                  <SVGCheck>
                    <GiCheckMark />
                  </SVGCheck>
                  <p>
                    We integrates with various decentralized applications,
                    expanding its capabilities and providing opportunities for
                    enhanced functionality and ecosystem integration.
                  </p>
                </Entry>
              </TextBody>
            </TextContainer>
          </InnerContent>
          <InnerContent>
            <SVGContainer>
              <img src={enhance} alt="Enhanced Interoperability" />
            </SVGContainer>
            <TextContainer>
              <TextHeader>
                <h3>
                  <em>Enhanced Interoperability</em>
                </h3>
              </TextHeader>
              <TextBody>
                <Entry>
                  <SVGCheck>
                    <GiCheckMark />
                  </SVGCheck>
                  <p>
                    We integrates seamlessly with decentralized protocols,
                    applications, and services, enabling collaboration and asset
                    management within the broader Web3 ecosystem.
                  </p>
                </Entry>
                <Entry>
                  <SVGCheck>
                    <GiCheckMark />
                  </SVGCheck>
                  <p>
                    We leverages smart contract integrations and cross-chain
                    compatibility to empower users with decentralized governance
                    capabilities, allowing them to manage assets and unlock the
                    full potential of the decentralized web.
                  </p>
                </Entry>
              </TextBody>
            </TextContainer>
          </InnerContent>
        </InnerContentBox>
      </SectionTwoContainer>
    </SectionContainer>
  );
};

export default SectionTwo;

const SectionTwoContainer = styled.div`
  width: 100%;
  padding-bottom: 128px;
`;

const InnerContentBox = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 84px;
  margin: 0 auto;

  @media (max-width: 870px) {
    align-items: center;
    justify-content: center;
  }
`;

const InnerContent = styled.div`
  display: flex;
  gap: 64px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;

  &:nth-child(2),
  &:nth-child(4) {
    flex-direction: row-reverse;
  }

  @media (max-width: 870px) {
    &:nth-child(2),
    &:nth-child(4) {
      flex-direction: column;
    }
    flex-direction: column;
  }
`;

const SVGContainer = styled.div`
  max-width: 380px;
  width: 100%;
`;

const TextContainer = styled.div`
  max-width: 620px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextHeader = styled.div`
  width: 100%;

  h3 {
    margin: 0;
    font-size: 36px;
    letter-spacing: 5px;
    word-wrap: break-word;
  }

  @media (max-width: 492px) {
    h3 {
      font-size: 24px;
    }
  }
`;

const TextBody = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 12px 0;
`;

const Entry = styled.div`
  width: 100%;
  display: flex;
  /* align-items: flex-start;
  */
  gap: 12px;
  margin: 0;

  p {
    margin: 0;
    font-size: 18px;
    color: silver;
    width: 550px;

    @media (max-width: 550px) {
      width: 100%;
    }
  }

  @media (max-width: 492px) {
    p {
      font-size: 16px;
    }
  }
`;

const SVGCheck = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 215, 0, 0.7);
  color: rgb(0, 0, 0);

  svg {
    font-size: 14px;
  }
`;
