import { styled } from "styled-components";
import {
  TbSmartHome,
  TbParachute,
  TbSwitchHorizontal,
  TbLock,
} from "react-icons/tb";
import { GiVote } from "react-icons/gi";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <SideBarMainContainer>
      <SideContainer>
        <InnerContent>
          <HeaderContainer>
            <h1>Acommunity</h1>
          </HeaderContainer>
          <NavLinks>
            <ul>
              <li className="active">
                <Link to="/app/dashboard">
                  <TbSmartHome />
                  <p>home</p>
                </Link>
              </li>
              <li>
                <Link to="/app/dashboard">
                  <TbParachute />
                  <p>airdrops</p>
                </Link>
              </li>
              <li>
                <Link to="/app/dashboard">
                  <TbSwitchHorizontal />
                  <p>bridge</p>
                </Link>
              </li>
              <li>
                <Link to="/app/dashboard">
                  <TbLock />
                  <p>stake</p>
                </Link>
              </li>
              <li>
                <Link to="/app/dashboard">
                  <GiVote />
                  <p>vote</p>
                </Link>
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
  z-index: 50;
  display: flex;
  background: #1e1e44;

  @media (max-width: 760px) {
    display: none;
  }
`;

const SideContainer = styled.div`
  display: flex;
  /* height: calc(100vh - 32px); */
  transition-duration: 0.15s;
  transition-property: width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  padding-bottom: 32px;
  padding-top: 32px;
  flex-shrink: 0;
`;

const InnerContent = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.6rem;
`;

const HeaderContainer = styled.div`
  > h1 {
    color: #f8d749;
    font-family: "Tomorrow", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;
  }
`;

const NavLinks = styled.nav`
  width: 100%;
  padding: 24px;

  ul {
    display: flex;
    gap: 4.8rem;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */

    li {
      &.active {
        a {
          color: gold;
          > p {
            font-weight: 800;
          }

          > svg {
            font-size: 22px;
          }
        }
      }

      > a {
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: "Tomorrow";
        color: #fff;
        font-size: 1.8rem;

        > svg {
          font-size: 22px;
        }

        > p {
          font-size: 16px;
          font-family: 400;
          text-transform: capitalize;
        }
      }
    }
  }
`;
