import React from "react";
import { styled } from "styled-components";

const Logo = () => {
  return (
    <LogoContainer>
      <p>
        L<span>o</span>
        <span>g</span>
        <span>o</span>
      </p>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  p {
    font-size: 28px;
    color: purple;
    font-weight: 700;

    span {
      font-size: 28px;
    }

    span:first-child {
      color: silver;
    }

    span:nth-child(2) {
      color: gold;
    }

    span:nth-child(3) {
      color: silver;
    }
  }
`;
