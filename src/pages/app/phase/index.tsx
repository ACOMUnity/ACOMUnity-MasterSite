import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { phaseMaps } from "../_molecules/salesData";
import Timer from "../_molecules/Timer";

const Phase = () => {
  const { phase } = useParams();
  if (phase === undefined) {
    throw new Error("Phase is undefined");
  }
  const data = phaseMaps[phase];

  return (
    <PhaseContainer>
      <InnerContainer>
        <Heading>
          <h2>{data.phase}</h2>
          <p>{data.title}</p>
        </Heading>
        <Main>
          <p>{data.description}</p>
          <Timer timerNum={data.startTime} />
        </Main>
      </InnerContainer>
    </PhaseContainer>
  );
};

export default Phase;

const PhaseContainer = styled.div`
  width: 100%;
  height: calc(100vh - 98px);
  background-image: linear-gradient(
    174deg,
    rgb(4, 7, 16) 56%,
    rgb(16, 17, 35) calc(56% + 2px)
  );
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
  gap: 84px;
`;

const Heading = styled.div`
  display: flex;
  margin-top: -124px;
  gap: 4px;
  flex-direction: column;

  h2 {
    z-index: 99;
    font-size: 38px;
    margin-bottom: 0;
    color: gold;
  }
  p {
    z-index: 99;
    font-size: 16px;
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
