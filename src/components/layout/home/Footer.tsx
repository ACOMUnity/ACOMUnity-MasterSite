import React from "react";
import { styled } from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <InnerContent>
        <InfoContainer>
          <LogoContainer>
            <h3>Acomunity</h3>
            <Logo></Logo>
          </LogoContainer>
          <Info>
            <h5>info@acoumity.com</h5>
          </Info>
          <Chat>
            <button>Schedule a chat</button>
          </Chat>
        </InfoContainer>
        <GeneralContainer>
          <div>
            <h3>General</h3>
            <ul>
              <li>home</li>
              <li>about</li>
              <li>features</li>
              <li>partners</li>
              <li>roadmap</li>
            </ul>
          </div>
        </GeneralContainer>
        <GeneralContainer>
          <div>
            <h3>Social Links</h3>
            <ul>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Telegram</li>
              <li>Discord</li>
              <li>Medium</li>
            </ul>
          </div>
        </GeneralContainer>
      </InnerContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  background-color: rgb(4, 8, 16);
`;

const InnerContent = styled.div`
  display: grid;
  padding: 24px 64px;
  row-gap: 48px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 906px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 537px) {
    grid-template-columns: 1fr;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 28px;
    font-family: monospace;
    margin: 0;
  }
`;

const Logo = styled.div``;

const Info = styled.div`
  width: 100%;
  border-top: 2px solid gold;
  border-bottom: 2px solid gold;
  text-align: center;

  h5 {
    font-weight: 500;
    font-size: 16px;
  }
`;

const Chat = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    outline: none;
    font-size: 14px;
    padding: 18px 28px;
    background-color: transparent;
    border: 1px solid gold;
    text-transform: capitalize;
  }
`;

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 906px) {
    &:last-child {
      align-items: start;
    }
  }

  @media (max-width: 537px) {
    align-items: start;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;

    h3 {
      font-size: 22px;
      margin: 0;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 16px;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`;
