import { styled } from "styled-components";
import Timer from "../../_molecules/Timer";

interface IProps {
  timerNum: number;
}

const PhaseHeader = ({ timerNum }: IProps) => {
  return (
    <MainContainer>
      <Header>
        <h1>Phase 1</h1>
        <p>seed round - an exclusive prelude</p>
      </Header>
      <SectionOne>
        <p>
          Inaugurating our voyage, the Seed Round stands as an invite-only
          affiar. Here, we extend a discreet invitation to our early
          supporterss, setting the stage for the AGEMS revolution
        </p>
      </SectionOne>
      <div>
        <Timer timerNum={timerNum} />
      </div>
    </MainContainer>
  );
};

export default PhaseHeader;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div {
    color: #f8d749;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  color: #f8d749;
  font-family: "Tomorrow";

  h1 {
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    color: #fff;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const SectionOne = styled.div`
  max-width: 58.4rem;

  p {
    color: #fff;
    font-family: Tomorrow;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
