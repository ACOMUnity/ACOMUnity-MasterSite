import { styled } from "styled-components";
import {
  TbSmartHome,
  TbParachute,
  TbSwitchHorizontal,
  TbLock,
} from "react-icons/tb";
import { GiVote } from "react-icons/gi";

const SideBar = () => {
  return (
    <SideBarMainContainer>
      <SideContainer>
        <InnerContent>
          <HeaderContainer>
            <ImageContainer>
              <img src="/acom.png" alt="acom logo" />
            </ImageContainer>
          </HeaderContainer>
          <NavLinks>
            <ul>
              <li className="active">
                <TbSmartHome />
                <p>home</p>
              </li>
              <li>
                <TbParachute />
                <p>airdrops</p>
              </li>
              <li>
                <TbSwitchHorizontal />
                <p>bridge</p>
              </li>
              <li>
                <TbLock />
                <p>stake</p>
              </li>
              <li>
                <GiVote />
                <p>vote</p>
              </li>
            </ul>
          </NavLinks>
        </InnerContent>
      </SideContainer>
    </SideBarMainContainer>
  );
};

export default SideBar;

const SideBarMainContainer = styled.aside`
  top: 0;
  position: sticky;
  height: 100vh;
  margin: 1.2rem 0;
  z-index: 50;
  /* overflow: hidden; */
  display: flex;
`;

const SideContainer = styled.div`
  padding: 2.4rem 0;
  display: flex;
  width: 240px;
  /* background: #2e3c72; */
  background: #02253d;
  height: calc(100vh - 32px);
  transition-duration: 0.15s;
  transition-property: width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  padding-bottom: 32px;
  padding-top: 32px;
  border-radius: 10px;
  flex-shrink: 0;
  margin-left: 10px;
  margin: 10px 0;
`;

const InnerContent = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`;

const HeaderContainer = styled.div`
  font-size: 2rem;
  font-family: fantasy;
  color: gold;
`;

const NavLinks = styled.nav`
  width: 100%;
  padding: 24px;

  ul {
    display: flex;
    gap: 2.4rem;
    flex-direction: column;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: "roboto mono";

      > svg {
        font-size: 22px;
      }

      > p {
        font-size: 16px;
        font-family: 400;
        text-transform: capitalize;
      }

      &.active {
        color: gold;
        > p {
          font-weight: 800;
        }

        > svg {
          font-size: 22px;
        }
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;

  > img {
    width: 100%;
  }
`;
