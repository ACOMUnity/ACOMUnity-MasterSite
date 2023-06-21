import React, { useState } from "react";
import { styled } from "styled-components";
import { Button } from "../../../../styles/element.styled";
import { data } from "./atoms/data";
import InfoCard from "./atoms/InfoCard";

const SectionOne: React.FC = () => {
  const [seeAll, setSeeAll] = useState<boolean>(false);
  const description =
    " ACOMUnity Master DAO is a groundbreaking concept that introduces a new paradigm in decentralized autonomous organizations (DAOs). Serving as the pinnacle of DAO hierarchy, the Master DAO establishes a framework for orchestrating and governing multiple subordinate DAOs within its ecosystem. Imagine a powerful and interconnected network of DAOs, each with its unique purpose and specialized focus, working together harmoniously under the guidance of the Master DAO. This innovative approach enables seamless collaboration, coordination, and resource allocation among the constituent DAOs, fostering a vibrant and thriving ecosystem.";
  return (
    <SectionOneContainer>
      <ContainerHeader>
        <div>
          <h3>What is ACOMUnity Master DAO?</h3>
        </div>
        <TextBody>
          <p>{seeAll ? description : description.slice(0, 154) + "..."}</p>
          <button type="button" onClick={() => setSeeAll((prev) => !prev)}>
            {!seeAll ? "Read More  " : "Read Less  "}&rarr;
          </button>
        </TextBody>
      </ContainerHeader>
      <ContainerBody>
        {data.map((d) => (
          <InfoCard key={d.id} data={d} />
        ))}
      </ContainerBody>
    </SectionOneContainer>
  );
};

export default SectionOne;

const SectionOneContainer = styled.div`
  width: 100%;
  padding: 24px;
  padding-top: 128px;
  padding-bottom: 128px;
  background-image: linear-gradient(
    175deg,
    rgb(16, 17, 35) 100%,
    rgb(4, 7, 16) calc(100% + 2px)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const ContainerHeader = styled.div`
  max-width: 768px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > div {
    text-align: center;
    h3 {
      font-size: 36px;
      letter-spacing: 7px;
    }
  }

  p {
    font-size: 18px;
  }

  @media (max-width: 492px) {
    > div {
      h3 {
        font-size: 24px;
      }
    }

    p {
      font-size: 16px;
    }
  }
`;

const TextBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  /* padding-bottom: 15px; */

  button {
    background-color: transparent;
    font-size: 16px;
    color: gold;
    cursor: pointer;
  }
`;

const ContainerBody = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 895px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
