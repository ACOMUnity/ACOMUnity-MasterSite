import React from "react";
import { styled } from "styled-components";
import { opaque } from "../../../styles/animate.styled";

const MoreInfo: React.FC = () => {
  return (
    <MoreInfoContainer>
      <InnerContainer>
        <h5>
          Get Notified <span>!</span>
        </h5>
        <div>
          <input placeholder="Enter Email Address" />
          <button>Submit</button>
        </div>
      </InnerContainer>
    </MoreInfoContainer>
  );
};

export default MoreInfo;

const MoreInfoContainer = styled.div`
  width: 100%;
  padding-top: 42px;
  padding-bottom: 42px;
  animation: ${opaque} 0.8s ease-in-out;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h5 {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    color: gold;

    span {
      font-size: 24px;
      font-family: monospace;
      text-shadow: rgb(255, 255, 255) 0px 2px 12px;
    }
  }

  > div {
    display: flex;
    max-width: 420px;
    min-height: 45px;
    border: 0.5px solid gold;
    align-items: center;
    padding-left: 12px;
    padding-right: 6px;
    gap: 12px;
    border-radius: 8px;

    button {
      height: 32px;
      width: 30%;
      background-color: gold;
      color: #000;
      border-radius: 6px;
      font-weight: 500;
      font-size: 14px;
    }

    input {
      height: 32px;
      background-color: transparent;
      padding: 0;
      font-family: monospace;
    }
  }
`;
