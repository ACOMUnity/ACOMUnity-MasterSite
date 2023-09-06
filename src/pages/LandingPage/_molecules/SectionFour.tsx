import styled from "styled-components";
// import { Container, Title } from "../../../styles/reuseable/element.styled";
import SectionContainer from "./atoms/SectionContainer";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { ImCheckboxUnchecked } from "react-icons/im";

const SectionFour = () => {
  return (
    <SectionContainer id="roadmap" nobg>
      <RoadmapContainer>
        <OutsideText>
          <TextTitle>
            <h3>Roadmap</h3>
          </TextTitle>
        </OutsideText>
        <RoadmapBox>
          <Phase>
            <Header>
              <div>Phase 1</div>
              <h4>Project Launch</h4>
            </Header>
            <ContentContainer>
              <Content>
                <div>
                  <BsFillCheckSquareFill style={{ width: "18px" }} />
                </div>
                <p>Community Telegram and social media launch</p>
              </Content>
              <Content>
                <div>
                  <BsFillCheckSquareFill style={{ width: "18px" }} />
                </div>
                <p>Website Launch</p>
              </Content>
              <Content>
                <div>
                  <BsFillCheckSquareFill style={{ width: "18px" }} />
                </div>
                <p>Token contract development</p>
              </Content>
              <Content>
                <div>
                  <ImCheckboxUnchecked style={{ width: "18px" }} />
                </div>
                <p>$ACOM launch on sushiswap</p>
              </Content>
            </ContentContainer>
          </Phase>
          <Phase>
            <Header>
              <div>Phase 2</div>
              <h4>Project Growth</h4>
            </Header>
            <ContentContainer>
              <Content>
                <div>
                  <ImCheckboxUnchecked style={{ width: "18px" }} />
                </div>
                <p>Publicity/Meme Campaign</p>
              </Content>
              <Content>
                <div>
                  <ImCheckboxUnchecked style={{ width: "18px" }} />
                </div>
                <p>$ACOM listings on CMC and CG</p>
              </Content>

              <Content>
                <div>
                  <ImCheckboxUnchecked style={{ width: "18px" }} />
                </div>
                <p>Development of NFT collections</p>
                {/* <p>More Marketing</p> */}
              </Content>
              <Content>
                <div>
                  <ImCheckboxUnchecked style={{ width: "18px" }} />
                </div>
                <p>Minting of collection to holders</p>
              </Content>
              <Content>
                <div>
                  <ImCheckboxUnchecked style={{ width: "18px" }} />
                </div>
                <p>First marketing campagin</p>
              </Content>
            </ContentContainer>
          </Phase>
          <Phase>
            <Header>
              <div>Phase 3</div>
              <h4>Project Scaling</h4>
            </Header>
            <ContentContainer>
              <Content>
                <div>
                  <ImCheckboxUnchecked style={{ width: "18px" }} />
                </div>
                <p>Development & Launch of NFT utilities</p>
              </Content>
              {/* <Content>
                <ImCheckboxUnchecked style={{ width: "18px" }} />
                <p>$MAMA listings on CMC and CG</p>
              </Content>

              <Content>
                <ImCheckboxUnchecked style={{ width: "18px" }} />
                <p>More Marketing</p>
              </Content>
              <Content>
                <ImCheckboxUnchecked style={{ width: "18px" }} />
                <p>NFT Collection for Hodlers</p>
              </Content> */}
            </ContentContainer>
          </Phase>
        </RoadmapBox>
      </RoadmapContainer>
    </SectionContainer>
  );
};

export default SectionFour;

const RoadmapContainer = styled.div`
  padding-bottom: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  max-width: 1240px;
  margin: auto;
  @media (max-width: 540px) {
    gap: 24px;
  }
`;
/* ${({ theme }) => theme.breakpoints.down("sm")} {
    gap: 24px;
  } */

const OutsideText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  text-align: center;
  gap: 24px;
`;

const TextTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  h3 {
    font-size: 28px;
    letter-spacing: 7px;
    text-align: center;
  }
`;

const Header = styled.div``;

const RoadmapBox = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(85, 85, 85, 0.4);
  border-radius: 16px;
  background-color: #151518;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;
/* ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
  } */

const Phase = styled.div`
  width: 100%;
  padding: 48px 32px;
  border: 1px solid rgba(85, 85, 85, 0.2);
  display: flex;
  flex-direction: column;
  gap: 36px;
  @media (max-width: 540px) {
    padding: 24px;
  }
`;
/* 
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 24px;
  } */

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: gold;

  p {
    font-family: sans-serif;
  }
`;
