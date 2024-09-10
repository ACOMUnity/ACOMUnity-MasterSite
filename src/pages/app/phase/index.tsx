import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { phaseMaps } from "../_molecules/salesData";
import Heading from "../_molecules/Heading";
import { IoMdArrowBack } from "react-icons/io";
import PhaseHeader from "./_molecules/PhaseHeader";

const Phase = () => {
  const { phase } = useParams();
  if (phase === undefined) {
    throw new Error("Phase is undefined");
  }
  const data = phaseMaps[phase];

  return (
    <PhaseContainer>
      <InnerContainer>
        <Header>
          <Link to={"/app/dashboard"}>
            <IoMdArrowBack />
          </Link>
        </Header>
        <Main>
          <Heading Comp={<PhaseHeader timerNum={data.startTime} />} />
        </Main>
      </InnerContainer>
    </PhaseContainer>
  );
};

export default Phase;

const PhaseContainer = styled.div`
  width: 100%;
  height: calc(100vh - 98px);
  padding: 24px 64px;
  @media (max-width: 580px) {
    padding: 24px;
    height: auto;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

const Header = styled.div`
  display: flex;
  margin-top: -72px;
  z-index: 99;
  gap: 4px;
  width: 3.2rem;
  flex-direction: column;
  a {
    color: #f8d749;
    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
