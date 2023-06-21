import React from "react";
import { styled } from "styled-components";

import { ICard } from "../../../../../models/cardDetailsIInterface";

interface Data {
  data: ICard;
}

const InfoCard: React.FC<Data> = ({ data }) => {
  return (
    <CardContainer>
      <InnerContainer>
        <Icon>
          <data.svg />
        </Icon>
        <Text>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </Text>
      </InnerContainer>
    </CardContainer>
  );
};

export default InfoCard;

const CardContainer = styled.div`
  width: 100%;
  min-height: 520px;
  /* box-shadow: rgba(255, 215, 0, 0.1) 0px 2px 39px 16px; */
  box-shadow: rgba(32, 28, 55) 0px 2px 39px 16px;
  border: 10px solid rgb(255, 215, 0, 0.1);
  /* border: 10px solid rgb(32, 28, 55); */

  @media (max-width: 862px) {
    min-height: 320px;
  }
`;

const InnerContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgb(255, 215, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(0, 0, 0);

  svg {
    height: 32px;
    width: 32px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 24px; */

  h3 {
    font-size: 22px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    color: silver;
  }
`;
