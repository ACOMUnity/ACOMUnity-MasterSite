import React from "react";
import { styled } from "styled-components";
import { RxDiscordLogo } from "react-icons/rx";
import { TbBrandTelegram, TbBrandReddit } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import TypewriterComponent from "typewriter-effect";

import img from "../../../../assets/vr.png";
import { Button } from "../../../../styles/element.styled";
import { bounce } from "../../../../styles/animate.styled";

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <TextContent>
          <h1>
            Unlock the Power Within: Discover the Path to{" "}
            <span>Dao Mastery</span>
          </h1>
          <p>
            We <span>Help</span> You Build Your Dreams
          </p>
        </TextContent>
        <CallToActionContainer>
          <Socials>
            <a href="/">
              <RxDiscordLogo />
            </a>
            <a href="/">
              <TbBrandTelegram />
            </a>
            <a href="/">
              <TbBrandReddit />
            </a>
            <a href="/">
              <FiTwitter />
            </a>
            <a href="/">
              <MdOutlineMail />
            </a>
          </Socials>
          <ButtonContainer>
            <Button fullwidth="true">Features</Button>
            <Button $type="outlined" fullwidth="true">
              Launch App
            </Button>
          </ButtonContainer>
        </CallToActionContainer>
      </TextContainer>
      <ImageContent>
        <picture>
          <img src={img} alt="" />
        </picture>
        <div>
          <h2>
            <TypewriterComponent
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(20)
                  .typeString("This is the ACOMUnity Master DAO")
                  .pauseFor(4000)
                  .deleteAll(10)
                  .typeString("A One-Stop spot to create your own DAO")
                  .pauseFor(1000)
                  .deleteAll(10)
                  .start();
              }}
            />
          </h2>
        </div>
      </ImageContent>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  width: 100%;
  padding: 72px 24px 0;
  display: flex;
  flex-direction: column;
  gap: 64px;
  background-image: linear-gradient(
    174deg,
    rgb(4, 7, 16) 56%,
    rgb(16, 17, 35) calc(56% + 2px)
  );
`;

const TextContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const TextContent = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 24px;

  h1 {
    font-size: 64px;

    span {
      font-size: 64px;
      text-shadow: rgb(255, 215, 0) 0px 2px 12px;
    }
  }

  p {
    font-size: 16px;

    span {
      font-size: 16px;
      text-transform: uppercase;
    }
  }

  @media (max-width: 492px) {
    h1 {
      font-size: 36px;

      span {
        font-size: 36px;
      }
    }
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  gap: 20px;

  a {
    color: silver;
  }
`;

const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  max-width: 380px;
  width: 100%;
  @media (max-width: 492px) {
    flex-wrap: wrap;
  }
`;

const ImageContent = styled.div`
  max-width: 1100px;
  width: 100%;
  box-shadow: rgba(131, 3, 249, 0.1) 0px 2px 39px 16px;
  border: 10px solid rgb(32, 28, 55);
  height: 15vh;
  margin: auto;
  position: relative;

  color: white;

  > div {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;

    h2 {
      > div {
        span {
          font-size: 32px;
          font-family: "Moirai One", cursive;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 8px;
          text-shadow: silver 0px 2px 12px;

          @media (max-width: 492px) {
            font-size: 20px;
          }
        }
      }
    }
  }

  picture {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 9999;
    animation: ${bounce} 4s ease infinite;
    width: 220px;
    height: 220px;
    -webkit-animation-name: ${bounce};

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
