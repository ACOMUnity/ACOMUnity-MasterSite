import React from "react";
import { styled } from "styled-components";

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <p>
        ACOM<span>un</span>
        <span>ity</span>
      </p>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  p {
    font-size: 28px;
    color: gold;
    font-weight: 700;
    margin: 0;

    span {
      font-size: 28px;
    }

    span:first-child {
      color: silver;
    }

    span:nth-child(2) {
      color: purple;
    }

    span:nth-child(3) {
      color: silver;
    }
  }
`;
